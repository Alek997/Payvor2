import axios from "axios";
import { baseUrl } from "./config";
import jwtDecode from "jwt-decode";
import httpService from "./httpService";

const tokenKey = "token";

export async function login(email, password) {
  const { data: jwt } = await httpService.post(baseUrl + "/login", {
    email,
    password
  });
  localStorage.setItem(tokenKey, jwt);
}

export async function register(user) {
  return httpService.post(baseUrl + "/register", {
    name: user.name,
    lastname: user.lastname,
    username: user.username,
    email: user.email,
    password: user.password
  });
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export async function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}
