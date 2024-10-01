"use server";
import { cookies } from "next/headers";

/**
 * Set a cookie with a specified key and value.
 * @param {string} key - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {Object} options - Options for the cookie (optional).
 */
export const setCookie = (key, value, options = {}) => {
  const cookieStore = cookies();
  // Prepare the cookie options
  const cookieOptions = {
    path: "/",
    ...options,
  };

  // Set the cookie
  cookieStore.set(key, value, cookieOptions);
};

/**
 * Get the value of a cookie by its key.
 * @param {string} key - The name of the cookie.
 * @returns {string|null} - The value of the cookie or null if not found.
 */
export const getCookie = async (key) => {
  const cookieStore = cookies();
  return cookieStore.get(key)?.value || null;
};
/**
 * Remove a cookie by its key.
 * @param {string} key - The name of the cookie.
 * @param {Object} options - Options for the cookie (optional).
 */
export const removeCookie = (key, options = {}) => {
  const cookieStore = cookies();
  // Remove the cookie
  cookieStore.delete(key, { path: "/", ...options });
};
