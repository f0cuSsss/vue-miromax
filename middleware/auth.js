export default ({ store, redirect, error, route }) => {
    const name = route.name;
    if(!store.getters['user/userIsLoggedIn']) {
        redirect(`/`);
    }
}