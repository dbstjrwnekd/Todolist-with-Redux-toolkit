import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://todo-api.roto.codes'}),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodoListByName: builder.query({
            query: (name) => `${name}`,
            providesTags: ['Todos']
        }),
        postTodoByName: builder.mutation({
            query: (name, todo) => ({
                url: name,
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: todo
                })
            }),
            invalidatesTags: ['Todos']
        })
    }),
})

export const { 
    useGetTodoListByNameQuery,
    usePostTodoByNameMutation
} = todoApi;
