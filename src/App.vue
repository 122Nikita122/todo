<template>
<v-app>
  <div id="todo-list">
  <div class="field">
    <v-text-field
      v-model="message"
      label="Какая будет новая задача?"
      solo
      @keydown.enter="addToList"
    >      
    </v-text-field>
  </div>
      <h4 class="title is-4"> Мои задачи: </h4>
      <ol >
          <TodoItem
            v-for="(item, index) in list"
            v-bind:task="item.task"
            v-bind:status="item.status"
            v-bind:key="index"
            v-bind:id="index"
            @toDeleteItem = "deleteItem(index)"            
          />   
      </ol>
  </div>
  
</v-app>
</template>

<script>
import TodoItem from './components/TodoItem'


export default {
  name: 'App',
  components: {
    TodoItem,
  },
    data: () => ({        
        list: [
          {
            task:'Найти кота',
            status: false,
            date: new Date()
          },
          {
            task:'починить',
            status: false,
            date: new Date()
          }
        ],
        message: null,
      }),         
    methods:{
      addToList() {
        if(this.message !== "") {
          this.list.push({
                          task: this.message,
                          status: false,
                          date: new Date()
                        });
          this.message = null;
        }        
      },
      deleteItem(index) {                      
          this.list.splice(index, 1);             
      },
    },
};
</script>

<style>
  body{
    padding: 50px;
  }
  .field_input{
    width: 100%;
    outline: none;
    border-bottom: 2px solid black;
  }
  .todo-list{
    margin: 50px;
  }
  .icon {
    margin-left: 40px;
  }
  ol > .v-card {
    margin-bottom: 15px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
  }
  .titel_text {
    width: 80%;
  }
</style>
