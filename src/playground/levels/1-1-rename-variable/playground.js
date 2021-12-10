import { auth, constructCollectionPathToTasks, DateTime, db } from "./lib";

function subscribe(onChange) {
  const cpyNm = auth.currentUser?.cpyNm;
  let completedTasks = [];
  let incompleteTasks = [];
  let timeout;

  const prefix = `${cpyNm} - Inc.`;

  const unsubscribeFromCompletedTasks = db
    .collection(constructCollectionPathToTasks(cpyNm))
    .where("deletedAt", "==", null)
    .where("completedAt", ">=", DateTime.now().minus({ day: 7 }).toJSDate())
    .onSnapshot((snapshot) => {
      completedTasks = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        onChange([...incompleteTasks, ...completedTasks]);
      }, 50);
    });

  let title = prefix + " cpyNm: " + onChange(cpyNm);

  const unsubscribeFromTasks = db
    .collection(constructCollectionPathToTasks(cpyNm))
    .where("deletedAt", "==", null)
    .where("completedAt", "==", null)
    .onSnapshot((snapshot) => {
      incompleteTasks = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        onChange([...incompleteTasks, ...completedTasks]);
      }, 50);
    });

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    unsubscribeFromCompletedTasks();
    unsubscribeFromTasks();
    return title;
  };
}

export { subscribe };
