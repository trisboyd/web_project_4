// import { reject } from "core-js/fn/promise";

export default class Api {

    constructor(server, authToken) {
        this._url = server;
        this._authToken = authToken;
    }

    getProfile() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._authToken}
            })
            .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`) )
            .catch(err => {console.log(err)});
    }

    getCardList() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authToken}
            })
            .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
            .catch(err => {console.log(err)});
    }

    changeProfile({ data }) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                about: data.descriptor
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
            .catch(err => {console.log(err)})
    }

    addCard({data}) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => {console.log(err)})
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._authToken
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => {console.log(err)})
    }

    addLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: {
                authorization: this._authToken
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => {console.log(err)})
    }

    removeLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: this._authToken
            }
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(err => {console.log(err)})
    }

    changeAvatar(link) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                avatar: link
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
            .catch(err => {console.log(err)})
    }
}