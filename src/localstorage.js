export const getStateStorage = () =>{
    const citasStorage = localStorage.getItem('citas');
    return (citasStorage === null ? undefined : JSON.parse(citasStorage));
}

export const setStateStorage = citasState => {
    const auxCitasState = JSON.stringify(citasState);
    localStorage.setItem('citas', auxCitasState);
}