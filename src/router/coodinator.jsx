
export const goToLogin = (history) =>{
    history.push("/login")
}

export const goToSignUp = (history) =>{
    history.push("/signup")
}

export const goToHome = (history) =>{
    history.push("/home")
}

export const goToCart = (history) =>{
    history.push("/active-order")
}

export const goToProfile = (history) =>{
    history.push("/profile")
}

export const goToRestaurantId = (history, id) =>{
    history.push(`/restaurants/${id}`)
}

export const SplashPage = (history) =>{
    history.push(`/`)
}