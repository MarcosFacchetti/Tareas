"use client";
import { ChangeEvent, FormEvent, useState, useEffect  } from "react";
import { useRouter, useParams } from "next/navigation";
import "./Form.css";

function FormPage() {

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
    });

    const router = useRouter();
    const params = useParams();

    const getTask =  async () => {
       const res = await fetch(`/api/tasks/${params.id}`)
       const data = await res.json()
       console.log(data)
       setNewTask({
        title: data.title,
        description: data.description,
       })
    }

    

    const createTask = async () => {
        const res = await fetch("/api/tasks", {
            method: "POST",
            body: JSON.stringify(newTask),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()

        router.push("/")
        router.refresh()
        console.log(data)
    }

    const updateTask = async () => {

        const res = await fetch (`/api/tasks/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(newTask),
            headers: {
                "Content-Type" : "applicaiton/json",
            }
        })
        const data = await res.json();
        router.push("/");
        router.refresh();
    };

    const handleDelete = async () => {
        if(window.confirm("estas seguro que queres borrar la tarea?")) {
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: "DELETE",
            })
            router.push("/")
            router.refresh()
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!params.id) {
            await createTask();
        } else {
            updateTask();
        }
    }

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) =>  setNewTask({... newTask, [e.target.name]: e.target.value})

    useEffect(() => {

        if (params.id) {
            getTask()
        }

    }, [])

  return (
    <div className="contenedor_form">
        <h1>
            {
                !params.id ? "Crear tarea nueva" : "Editar tarea"
            }
        </h1>

            <button type="button" onClick={handleDelete}>Borrar</button>

        <form onSubmit={handleSubmit}>
            <input value={newTask.title} onChange={handleChange} type="text" name="title" placeholder="Title"></input>
            <textarea value={newTask.description} onChange={handleChange} name="description" placeholder="Description"></textarea>
            <button type="submit">
                {
                    !params.id ? "Guardar" : "Actualizar"
                }
            </button>
        </form>
    </div>
  )
}

export default FormPage