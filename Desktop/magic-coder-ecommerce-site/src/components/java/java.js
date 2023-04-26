import { reactive } from 'vue'

export const produce = reactive({
    produces: [],
    add(e) {
      if (this.produces.includes(e)) {
        e.qty++
        return
      }
      else {
        this.produces.push(e)
        console.log(this.produces)
      }
  },
    remove(produces, id) {
    const pro = produces.findIndex((obj) => obj.id === id);
  
    if (pro > -1) {
      produces.splice(pro, 1);
    }
  
    return produces;
  }
})


