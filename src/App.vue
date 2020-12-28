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
      <ol v-on:click="deleteItem">
        <v-card default                
                elevation="2"                
                color="primary" 
                v-for="(item, index) in list" 
                :key="index"
                :id="index"                               
        >
          <v-checkbox v-model="item.status"
                      :color="item && 'green' || 'primary'"                       
          ></v-checkbox>            
          <p :class="item.status && 'green--text'">                                             
            {{item.task}} 
          </p>
          <v-btn class="icon"
                 depressed
                 v-on="on"                                 
          >
            <v-icon v-if="item.status"
                    color="success"
            > mdi-check
            </v-icon>
            <v-icon >{{ svgPath }}</v-icon>
          </v-btn>          
        </v-card>      
      </ol>
  </div>
  
</v-app>
</template>

<script>
import { mdiDelete  } from '@mdi/js'


export default {
  name: 'App',
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
        svgPath: mdiDelete,
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
      deleteItem(e) {
        if(e.target.closest("button")){
          const index = e.target.closest("div").getAttribute("id");                  
          this.list.splice(index, 1);       
        }          
      }
    }
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
