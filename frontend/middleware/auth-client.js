export default function ({ $auth, redirect, store }) {
  const user = (store.state.user_auth === undefined || store.state.user_auth === null) ? $auth.user : store.state.user_auth
  if (user && user.active === 'Y' && (user.role === 'admin' || user.role === 'company' || user.role === 'requester' || user.role === 'manager')) {
  } else {
    redirect('/login')
  }
}
