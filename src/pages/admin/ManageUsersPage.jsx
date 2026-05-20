import {
  useEffect,
  useState,
} from "react";

import DashboardLayout
  from "../../layouts/DashboardLayout";

import {
  getUsers,
  deleteUser,
  updateUser,
} from "../../services/userService";


export default function ManageUsersPage() {

  // ==========================================
  // STATE
  // ==========================================
  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  // ==========================================
  // FETCH USERS
  // ==========================================
  useEffect(() => {

    const fetchUsers =
      async () => {

        try {

          const result =
            await getUsers();

          setUsers(
            result.data.data
          );

        } catch (error) {

          console.error(error);

        } finally {

          setLoading(false);
        }
      };

    fetchUsers();

  }, []);


  // ==========================================
  // DELETE USER
  // ==========================================
  const handleDelete = async (
    id
  ) => {

    const confirmDelete =
      window.confirm(
        "Yakin ingin menghapus user?"
      );

    if (!confirmDelete) return;

    try {

      await deleteUser(id);

      setUsers((prev) =>
        prev.filter(
          (user) => user.id !== id
        )
      );

    } catch (error) {

      console.error(error);
    }
  };


  // ==========================================
  // CHANGE ROLE
  // ==========================================
  const handleRoleChange = async (
    user
  ) => {

    const newRole =
      user.role === "admin"
        ? "user"
        : "admin";

    try {

      await updateUser(
        user.id,
        {
          full_name:
            user.full_name,

          email:
            user.email,

          profile_image:
            user.profile_image,

          role: newRole,
        }
      );

      setUsers((prev) =>
        prev.map((item) =>
          item.id === user.id
            ? {
                ...item,
                role: newRole,
              }
            : item
        )
      );

    } catch (error) {

      console.error(error);
    }
  };


  return (

    <DashboardLayout>

      <div className="
        p-4
        sm:p-6
      ">

        <div className="
          max-w-7xl
          mx-auto
        ">

          {/* HEADER */}
          <div className="mb-6">

            <h1 className="
              text-xl
              sm:text-2xl
              font-bold
              text-green-900
            ">
              Kelola User
            </h1>

            <p className="
              text-sm
              sm:text-base
              text-gray-600
              mt-2
            ">
              Kelola semua user aplikasi
            </p>
          </div>


          {/* TABLE CONTAINER */}
          <div className="
            bg-white
            rounded-2xl
            shadow
            overflow-hidden
          ">

            <div className="
              overflow-x-auto
            ">

              <table className="
                min-w-[900px]
                w-full
                text-sm
              ">

                {/* TABLE HEAD */}
                <thead className="
                  bg-green-100
                  text-green-900
                ">

                  <tr>

                    <th className="
                      px-4
                      sm:px-6
                      py-4
                      text-left
                    ">
                      Nama
                    </th>

                    <th className="
                      px-4
                      sm:px-6
                      py-4
                      text-left
                    ">
                      Email
                    </th>

                    <th className="
                      px-4
                      sm:px-6
                      py-4
                      text-left
                    ">
                      Role
                    </th>

                    <th className="
                      px-4
                      sm:px-6
                      py-4
                      text-left
                    ">
                      Poin
                    </th>

                    <th className="
                      px-4
                      sm:px-6
                      py-4
                      text-left
                    ">
                      Dibuat
                    </th>

                    <th className="
                      px-4
                      sm:px-6
                      py-4
                      text-left
                    ">
                      Aksi
                    </th>

                  </tr>
                </thead>


                {/* TABLE BODY */}
                <tbody>

                  {loading ? (

                    <tr>

                      <td
                        colSpan="6"
                        className="
                          text-center
                          py-10
                        "
                      >
                        Loading...
                      </td>

                    </tr>

                  ) : users.length === 0 ? (

                    <tr>

                      <td
                        colSpan="6"
                        className="
                          text-center
                          py-10
                        "
                      >
                        Belum ada data
                      </td>

                    </tr>

                  ) : (

                    users.map((user) => (

                      <tr
                        key={user.id}
                        className="
                          border-b
                          hover:bg-gray-50
                          transition
                        "
                      >

                        {/* NAMA */}
                        <td className="
                          px-4
                          sm:px-6
                          py-4
                          whitespace-nowrap
                        ">
                          {user.full_name}
                        </td>


                        {/* EMAIL */}
                        <td className="
                          px-4
                          sm:px-6
                          py-4
                        ">
                          {user.email}
                        </td>


                        {/* ROLE */}
                        <td className="
                          px-4
                          sm:px-6
                          py-4
                        ">

                          <span className={`
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            font-semibold

                            ${
                              user.role === "admin"
                                ? `
                                  bg-blue-100
                                  text-blue-700
                                `
                                : `
                                  bg-green-100
                                  text-green-700
                                `
                            }
                          `}>

                            {user.role}

                          </span>

                        </td>


                        {/* POINT */}
                        <td className="
                          px-4
                          sm:px-6
                          py-4
                        ">
                          {user.total_points}
                        </td>


                        {/* CREATED */}
                        <td className="
                          px-4
                          sm:px-6
                          py-4
                          whitespace-nowrap
                        ">

                          {new Date(
                            user.created_at
                          ).toLocaleDateString()}

                        </td>


                        {/* ACTION */}
                        <td className="
                          px-4
                          sm:px-6
                          py-4
                        ">

                          <div className="
                            flex
                            flex-col
                            sm:flex-row
                            gap-2
                          ">

                            <button
                              onClick={() =>
                                handleRoleChange(user)
                              }
                              className="
                                bg-blue-500
                                hover:bg-blue-600
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                text-xs
                                font-semibold
                                transition
                                whitespace-nowrap
                              "
                            >
                              Ganti Role
                            </button>

                            <button
                              onClick={() =>
                                handleDelete(user.id)
                              }
                              className="
                                bg-red-500
                                hover:bg-red-600
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                text-xs
                                font-semibold
                                transition
                                whitespace-nowrap
                              "
                            >
                              Hapus
                            </button>

                          </div>

                        </td>

                      </tr>
                    ))
                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}