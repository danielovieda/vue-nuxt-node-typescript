export default function ({ $auth, redirect, store }) {
  const user = (store.state.user_auth === undefined || store.state.user_auth === null) ? $auth.user : store.state.user_auth

  if (user && user.active === 'Y' && (user.role === 'tc' || user.role === 'translator' || user.role === 'reviewer')) {
    //
  } else {
    redirect('/login')
  }
}
