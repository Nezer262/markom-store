export const Connection = () => {
    return `
    <div class="connection">
        <h3 class="connection__title title">Обратная связь</h3>
        <form action="#" name="newform" method="post" class="connection__form">
            <div class="connection__form-inputs">
                <input class="connection__input" type="text" placeholder="Имя*">
                <input class="connection__input" type="text" placeholder="Ваша почта*">
            </div>
            <textarea class="connection__textarea" name="text" placeholder="Ваш вопрос, отзыв или пожелание*"></textarea>
            <div class="connection__confirmation">
                <input id="formConfirmation" class="connection__confirmation-input" type="checkbox" name="confirmation">
                <label for="formConfirmation" class="connection__confirmation-label">Настоящим подтверждаю, что я ознакомлен и согласен с условиями оферты и политики конфиденциальности *</label>
            </div>
            <button class="connection__btn btn">Отправить</button>
        </form>
    </div>
    `;
}