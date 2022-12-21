import axios from "axios";

const baseURL = "http://localhost:8080";

export const fetchAllItems = async () => {
  const result = await axios.get(`${baseURL}/shopping/list`);
  return result.data || [];
};

export const addItem = async (name, desc, num) => {
  const result = await axios.post(`${baseURL}/shopping/list`, {
    name,
    desc,
    num,
  });
  return result.data;
};

export const deleteItem = async (id) => {
  const result = await axios.delete(`${baseURL}/shopping/list`, {
    id,
  });
  return result.data;
};

export const toggleItem = async (id) => {
  const result = await axios.get(`${baseURL}/shopping/toggle`, {
    id,
  });
  return result.data;
};

export const editItem = async (id, name, desc, num, isPurchased) => {
  const result = await axios.put(`${baseURL}/shopping/list`, {
    id,
    name,
    desc,
    num,
    isPurchased
  });
  return result.data;
}
