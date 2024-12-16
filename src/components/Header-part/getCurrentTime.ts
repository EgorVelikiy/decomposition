/** Функция, преобразующая сегодняшнюю дату в формат:
 *  день недели () / месяц / полный год () г. / в время в формате 24ч. ()
*/

export default function formatDate(): string {
    const date: Date = new Date()
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    const formattedDate = date.toLocaleDateString('ru-RU', options).replace(/,/g, '');
    return `${formattedDate}`;
}