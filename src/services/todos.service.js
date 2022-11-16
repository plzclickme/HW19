import httpService from "./http.service";
const todosEndepoint = "todos/";
const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndepoint, {
            params: {
                _page: 1,
                _limit: 11,
            },
        });
        return data;
    },
    post: async () => {
        const { data } = await httpService.post(todosEndepoint);
        return data;
    },
};
export default todosService;
