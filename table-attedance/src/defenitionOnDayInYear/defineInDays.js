export function defineInDays(year, month){
    const month30Day = new Set(['April', 'June', 'September', 'November'])
    const leapMonth = 'February'
    if(month30Day.has(month)){
        return 31
    }
    if((year === 2023 || year === 2025) && leapMonth === month){
      return 28
    }
    if(year === 2024 && leapMonth === month){
      return 29
    }
    return 30
}
