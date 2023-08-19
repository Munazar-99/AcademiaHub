import DataTable from "@/components/managestudents/DataTable";

const ManageStudents: React.FC = () => {
    return (
        <main className='w-4/5 h-[87%] bg-gray-100'>
            <section className='h-full  w-full pt-3 px-3'>
              <DataTable/>
            </section>
        </main>
    )
};

export default ManageStudents;