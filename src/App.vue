<script>
  import {Developer} from "./greetings/model/developer.entity.js";
  import RegisterDeveloper from "./greetings/components/register-developer.component.vue";
  import GreetDeveloper from "./greetings/components/greet-developer.component.vue";
  import ShowDeveloperCount from "./greetings/components/show-developer-count.component.vue";

  export default {
    name: "app",
    components: {ShowDeveloperCount, GreetDeveloper, RegisterDeveloper},
    data() {
      return {
        firstName: "",
        lastName: "",
        developerCount: 0,
        hasRegistered: false,
      };
    },
    methods: {
      updateDeveloperCount(developer) {
        const dev = new Developer(developer.firstName, developer.lastName);
        if(dev.fullName !== "Unknown") this.developerCount++;
      },
      onDeveloperRegistered(developer) {
        this.hasRegistered = true;
        this.firstName = developer.firstName;
        this.lastName = developer.lastName;
        console.log("Developer registered: ", developer);
        this.updateDeveloperCount(developer);
      },
      onLater() {
        this.hasRegistered = false;
        this.firstName = "";
        this.lastName = "";
        console.log("Registration deferred");
      }
    }

  }
</script>

<template>
  <h1>Hello Vue Developer Application</h1>
  <register-developer v-on:developer-registered="onDeveloperRegistered"
                      v-on:later="onLater"/>
  <greet-developer v-if="hasRegistered" :first-name="firstName" :last-name="lastName"/>
  <show-developer-count :developer-count="developerCount"/>
</template>

<style scoped>
</style>
