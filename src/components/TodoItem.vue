<template> 
    <v-card default                
            elevation="2"                
            color="primary"                                                      
    >
      <v-checkbox v-model="status"
                  :color="status && 'green' || 'primary'"                       
      ></v-checkbox>            
      <p :class="status && 'green--text'">                                             
        {{task}} 
      </p>
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

