<template>
    <div>
  <div class="app-main-layout">
    <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#">
            <i class="material-icons black-text">CyriuDev</i>
          </a>
          <span class="black-text">01.01.2021</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <a
                class="dropdown-trigger black-text"
                href="#"
                data-target="dropdown"
            >
              For Alif-tech 
              <i class="material-icons right">Alif tech</i>
            </a>

            <ul id='dropdown' class='dropdown-content'>
              <li>
                <a href="#" class="black-text">
                  <i class="material-icons">account_circle</i>Профиль
                </a>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a href="#" class="black-text">
                  <i class="material-icons">assignment_return</i>Выйти
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav app-sidenav open">
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Главная (Dashboard)</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Cписок всех сотрудников</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Просмотр одного сотрудника</a>
      </li>
    </ul>

    <main class="app-content">
        <div> 
            <section>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>ФИО</th>
        <th>Отдель</th>
        <th>Должность</th>
        <th>Пол</th>
        <th>Дата</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>1</td>
        <td>1212</td>
        <td>12.12.32</td>
        <td></td>
        <td>
          <span class="white-text badge red"></span>
        </td>
        <td>
          <button class="btn-small btn">
            <i class="material-icons">12.12.32</i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
            </div>
     
</main>

<div class="fixed-action-btn">
  <a class="btn-floating btn-large blue" href="#">
    <i class="large material-icons">add</i>
  </a>
</div>
</div>
</div>
</template>