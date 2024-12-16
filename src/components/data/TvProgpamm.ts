interface TVProgrammProps {
    time: string,
    programm: string,
    channel: string
}

const TVProgrammData: TVProgrammProps[] = [
    {
      time: '02:00',
      programm: 'ТНТ.Best',
      channel: 'ТНТ International'
    },
    {
        time: '02:15',
        programm: 'Джинглики',
        channel: 'Карусель INT'
    },
    {
        time: '02:25',
        programm: 'Наедине со всеми',
        channel: 'Первый'
    },
]

export default TVProgrammData