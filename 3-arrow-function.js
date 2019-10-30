//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    jobs: [
        {
            name: 'admin',
            avaliable: true
        },
        {
            name: 'tech',
            avaliable: false
        },
        {
            name:'digital',
            avaliable: true
        }
    ],
    getTasksToDo() {
        return this.tasks.filter((tassk) => tassk.completed === false)
    },
    getJobs() {
            return this.jobs.filter((jobs) => jobs.avaliable === true)
        


    }
}

console.log(tasks.getTasksToDo())
console.log(tasks.getJobs())