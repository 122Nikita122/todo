<template> 
    <v-card default                
            elevation="2"                
            :color='category === "Семья" && "primary" || category === "Работа" && "warning" || "purple" '        
    >
      <v-checkbox v-model="status"
                  :color="status && 'green' || 'primary'"                       
      ></v-checkbox>            
      <p :class="status && 'green--text'">                                             
        {{task}}
      </p>
     <span class="tag is-light">{{category}}</span>
      <v-btn class="icon"
            depressed 
            @click="toDelete"           
      >
        <v-icon v-if="status"
                color="success"
        > mdi-check
        </v-icon>
        <v-icon >{{ svgPath }}</v-icon>
      </v-btn>
    </v-card>         
</template>

<script>
import { mdiDelete  } from '@mdi/js';


  export default {
    name: 'TodoItem',
    props: {
      task: String,
      status: Boolean,
      category: String,      
    },
    data: () => ({
      svgPath: mdiDelete,
    }),
    methods: {
      toDelete() {
        this.$emit("toDeleteItem")
      }
    }
    
  }
</script>

