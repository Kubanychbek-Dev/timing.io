class LocalStore {
    constructor () {
      this.key = "times";
    }

    getTimes () {
      let times;
      if(localStorage.getItem(this.key) !== null) {
        times = JSON.parse(localStorage.getItem(this.key));
      }else {
        times = [];
      }
      return times;
    }

    addTimes () {
      let times = this.getTimes();
      const now = new Date();

      let id;

      if(times.length === 0) {
        id = times.length + 1;
      }else {
        id = times[times.length -1].id + 1;
      }

      let myDict = {
        id: id,
        note: "",
        date: now.getDate(),
        month: now.getMonth() + 1,
        year: now.getFullYear(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
      }

      times.push(myDict);
      localStorage.setItem(this.key, JSON.stringify(times));
    }

    addNote (id, note) {
      let times = this.getTimes();
      let toAdd = times.find(item => item.id === id);

      toAdd.note = note;
      localStorage.setItem(this.key, JSON.stringify(times));
    }

    deleteTime (id) {
      let times = this.getTimes();

      if(times.length === 1) {
        localStorage.removeItem(this.key);
      }else {
        let filtered = times.filter(item => item.id !== id);
        localStorage.setItem(this.key, JSON.stringify(filtered));
      }
    }

  }

export { LocalStore }