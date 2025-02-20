import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__textContent">
        <div className="sidebar__textContent-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum,
          adipiscing amet in egestas sem dui, arcu faucibus scelerisque. Nisl
          est felis id volutpat. Sed dolor fermentum amet lectus nibh quis.
          Tortor donec pellentesque leo ac placerat. Morbi.
        </div>
        <div className="sidebar__textContent-contacts">
          <div className="sidebar__title">Контакты</div>
          <ul>
            <li className="sidebar__listItem">
              <a href="tel:+79177811680">Тел: +79177811680</a>
            </li>
            <li className="sidebar__listItem">
              Республика Башкортостан, Альшеевский район, <br />
              с. Раевский, ул. Гагарина, д. 29
            </li>
          </ul>
        </div>
        <div className="sidebar__textContent-graphics">
          <ul>
            <div className="sidebar__title">Режим работы</div>
            <li className="sidebar__listItem">С 10:00 до 20:00 (Пн-Пт)</li>
            <li className="sidebar__listItem">С 12:00 до 18:00 (Сб-Вс)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
