'use client';

import { deleteTask, FormState } from "@/app/actions/task";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialState: FormState = { error: '' };
  const [state, formAction] = useFormState(deleteTaskWithId, initialState);

  useEffect(() => {
    if (state && state.error !== '') {
      alert(state.error);
    }
  }, [state]);

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <button type="submit"
        className="hover:text-gray-700 text-lg cursor-pointer disabled:text-gray-400"
        disabled={pending}
      >
        <FaTrashAlt />
      </button>
    );
  }

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  )
}

export default TaskDeleteButton;
