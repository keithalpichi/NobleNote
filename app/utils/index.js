import React from 'react'
//import fetch from 'isomorphic-fetch'
//import { polyFill } from 'es6-promise'

const defaultHeaders = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

function buildHeaders() {
    const token = localStorage.getItem('authToken')

    return {
      ...defaultHeaders,
      "Authorization": `${token}`
    }
}

export function checkStatus(resp) {
  if (resp.status >= 200 && resp.status < 300) {
    return resp
  } else {
    let error = new Error(resp.statusText)
    error.response = resp
    throw error
  }
}

export function parseJSON(resp) {
  return resp.json()
}

/*
export function httpGet(url) {
  return fetch(url, {
    headers: buildHeaders(),
  })
  .then(checkStatus)
  .then(parseJSON)
}

export function httpPost(url, data) {
  const body = JSON.stringify(data)

  return fetch(url, {
    method: 'post',
    headers: buildHeaders(),
    body: body
  })
  .then(checkStatus)
  .then(parseJSON)
}

export function httpDelete(url) {
  return fetch(url, {
    method: 'delete',
    headers: buildHeaders()
  })
  .then(checkStatus)
  .then(parseJSON)
}

export function httpPut(url, data) {
  const body = JSON.stringify(data)

  return fetch(url, {
    method: 'put',
    headers: buildHeaders(),
    body: body
  })
  .then(checkStatus)
  .then(parseJSON)
}
*/

export function setDocumentTitle(title) {
  document.title = `${title} | Noble Note`
}

export function renderErrorsFor(errors, ref) {
  if (!errors) return false

  return errors.map((error, i) => {
    if (error[ref]) {
      return (
        <div key={i} className="error">{error[ref]}</div>
      )
    }
  })
}

export function renderFontAwesomeIcon(name) {
  return (
    <i className={`fa fa-${name}`} aria-hidden="true"></i>
  )
}
