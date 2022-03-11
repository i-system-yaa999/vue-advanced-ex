<template>
  <div class="home">
    <h2>チーム一覧</h2>
    <router-link to="/About:Team_A"><p>Team_A</p></router-link>
    <router-link to="/About:Team_B"><p>Team_B</p></router-link>
    <router-link to="/About:Team_C"><p>Team_C</p></router-link>

    <!-- <router-link v-for="team in teams" :key="team.id" to="/About{team.name}"><p>{{team.name}}</p></router-link> -->

    <!-- <router-link v-for="team in teams" :key="team.id" :to="{name:'/About',params:{team_name:team.name},}"><p>{{team.name}}</p></router-link> -->

    <!-- <router-link v-for="team in teams" :key="team.id" :to="{name:'/About',query:{team_name:team.name} }"><p>{{team.name}}</p></router-link> -->

    <!-- <a v-for="team in teams" :key="team.id" @click="$router.push({name:'/About',query:{team_name:team.name} })"><p>{{team.name}}</p></a> -->
    <a href=""></a>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      teams: [
        {
          id: "c36136ef-552f-4dc9-84b6-65ecb8574e81",
          name: "Team_A",
        },
        {
          id: "ed0459f5-716d-4ef4-99ba-5dc750dfe0d0",
          name: "Team_B",
        },
        {
          id: "60d0d5d5-8ce9-41d9-a65b-13a090c10ae1",
          name: "Team_C",
        },
      ],
    };
  },
};
</script>

<style scoped>
div {
  line-height: 30px;
}
</style>