<template>
  <div id="todo-list" class="p-6">
  <div>
    <v-text-field
      v-model="message"
      label="Какая будет новая задача?"
      solo
      @keydown.enter="addToList"
    >
    </v-text-field>
  <div class="field">
    <div class="control">
      <div class="select is-primary">     
        <select name="prioritet" id="prioritet" @click="setChoice">
            <option value="Семья" > Семья </option>
            <option value="Работа" > Работа </option>
            <option value="Досуг" > Досуг </option>
        </select>           
      </div>
      <button class = "button is-primary" @click="sortTask">Сортировать по категории</button>
    </div> 
  </div>   
  </div>
      <h4 class="title is-4"> Мои задачи: </h4>
      <ol >
          <TodoItem
            v-for="(item, index) in task"
            v-bind:task="item.task"
            v-bind:status="item.status"
            v-bind:category="item.category"            
            v-bind:key="index"
            v-bind:id="index"
            @toDeleteItem = "deleteItem(index)"            
          />   
      </ol>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import TodoItem from '../components/TodoItem'

export default {
  name: 'Todo',
  components: {
    TodoItem,
  },
  data: () => ({          
      message: null,
      category: "Семья",      
    }),         
  methods:{
    ...mapMutations(["SET_TASK", "DEL_TASK", "SORT_TASK"]),
    addToList() {
      if(this.message !== null) {
        this.SET_TASK({
                        task: this.message,
                        status: false,
                        date: new Date(),
                        category: this.category,                        
                      });
        this.message = null;
      }        
    },
    deleteItem(index) {                      
      this.DEL_TASK(index);
    },
    setChoice(e) {
      this.category = e.target.value;
    },
    sortTask(){     
      this.SORT_TASK(this.category)
    },
  },
  computed: {
      ...mapGetters([
      'task'
    ]),
  } 
};

</script>

<style>
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
