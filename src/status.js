function updateTasks() {
  const list = global.document.getElementsByTagName("li");
  const tempTasks = [];

  if (list.length !== 0) {
    Array.from(list).forEach((li, index) => {
      const div = li.getElementsByTagName("div")[0];
      const completed = div.getElementsByTagName("input")[0].checked;
      const id = div.getElementsByTagName("input")[0].name;
      const description = div.getElementsByTagName("input")[1].value;

      const task = {
        completed,
        description,
        index,
        id,
      };
      tempTasks.push(task);
    });
  }
  return tempTasks;
}

module.exports = { updateTasks };