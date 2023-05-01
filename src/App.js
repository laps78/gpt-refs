import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Ссылки на необходимые сервисы для настройки подключения с chatGPT:
        </h1>
      </header>
      <main>
        <article>
          <h2>VPN</h2>
          <a href="#">Ссылка на сервис</a>
          <p>
            VPN требуется для обхода внутренних блокировок openai, связанных с
            антироссийскими санкциями. Ссылка временно не работает, но это в
            скором времени будет исправлено.
          </p>
        </article>
        <article>
          <h2>SMS-activate</h2>
          <a href="https://sms-activate.org/?ref=6834896">Ссылка на сервис</a>
          <p>
            Данный сервис позволяет арендовать телефонный номер для приема смс,
            который нужен для полноценной регистрации на openai. Перейдите по
            ссылке, пройдите регистрацию и арендуйте номер той страны, откуда
            идет ваш VPN-траффик.
          </p>
        </article>
      </main>
    </div>
  );
}

export default App;
