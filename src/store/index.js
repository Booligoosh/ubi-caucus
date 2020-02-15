import Vue from "vue";
import Vuex from "vuex";
import { removeDuplicates, getCellContentInRow } from "../helperFunctions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: []
  },
  mutations: {
    setPeople(state, people) {
      state.people = people;
    }
  },
  actions: {
    async loadSpreadsheetData(context) {
      const url = `https://spreadsheets.google.com/feeds/cells/1seQBwEMJ9aM5MluxBVlnLlwFRfhldICwKiSevf69bmk/1/public/full?alt=json`;
      const spreadsheetData = await fetch(url).then(r => r.json());
      console.log(spreadsheetData);
      const cells = spreadsheetData.feed.entry.map(cell => ({
        row: Number(cell.gs$cell.row),
        col: Number(cell.gs$cell.col),
        content: cell.content.$t
      }));
      console.log({ cells });
      const rowNumbers = removeDuplicates(cells.map(cell => cell.row));
      console.log(rowNumbers);
      const rows = rowNumbers.map(rowNumber =>
        cells.filter(cell => cell.row === rowNumber)
      );
      console.log(rows);
      const people = rows.slice(2).map(row => {
        let area = getCellContentInRow(row, 1);
        let name = getCellContentInRow(row, 2);
        let twitter = getCellContentInRow(row, 3);
        if (twitter) {
          twitter = twitter.replace(/ /g, ``);
        }
        let website = getCellContentInRow(row, 4);
        let donateLink = getCellContentInRow(row, 5);
        return {
          area,
          name,
          twitter,
          website,
          donateLink
        };
      });
      console.log(people);
      context.commit(`setPeople`, people);
    }
  },
  modules: {}
});
