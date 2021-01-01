<template>
    <div>
  <div class="app-main-layout">
      <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#">
            <i class="material-icons black-text">dehaze</i>
          </a>
          <span class="black-text">12.12.12</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <a
                class="dropdown-trigger black-text"
                href="#"
                data-target="dropdown"
            >
              USER NAME
              <i class="material-icons right">arrow_drop_down</i>
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
        <th>Кол сотрдников</th>
        <th>Кол муж</th>
        <th>Кол жен</th>
        <th>Кол сотруд в каж отделе</th>
        <th>Средный возрасть</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>1</td>
        <td>1212</td>
        <td>12.12.32</td>
        <td>name</td>
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

</div>
</div>
</template>
