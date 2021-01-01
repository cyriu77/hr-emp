<template>
    <ul class="sidenav app-sidenav open">
      
     <router-link
    v-for="link in links"
    :to="link.urlPath"
    :key="link.urlPath"
    custom
    v-slot="{ href, navigate, isActive, isExactActive }"
    >
    <li :class="{'active': isActive, 'exact-active': isExactActive}">
      <a :href="href" @click="navigate" class="waves-effect waves-orange pointer">
        {{link.urlName}}
      </a>
    </li>
    </router-link>
      
     
    </ul>
</template>
<script>
export default {
    data: () => ({
        links:[
            {title: 'Главная (Dashboard)', url: '/'},
            {title: 'Cписок всех сотрудников', url: '/employees'},
            {title: 'Просмотр одного сотрудника', url: '/employee'}
        ]
    })
}
</script>