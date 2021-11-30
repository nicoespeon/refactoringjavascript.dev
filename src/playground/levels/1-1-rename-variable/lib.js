class DB {
  collection() {
    return this;
  }
  where() {
    return this;
  }
  onSnapshot() {
    return () => {};
  }
}

class Now {
  minus() {
    return this;
  }
  toJSDate() {
    return this;
  }
}

export const db = new DB();
export const auth = {
  currentUser: {
    cpyNm: "Acme Gooseberries",
  },
};
export const DateTime = {
  now: () => new Now(),
};
export function constructCollectionPathToTasks() {
  return "";
}
