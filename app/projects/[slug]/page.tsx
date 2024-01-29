import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import Header from "./Header";
import Image from "@/components/Image";
import MainLayout from "@/components/layouts/MainLayout";


type PropsParams = {
    params: {
      slug: string;
    };
  };
  
  interface Props {
    params: {
      slug: string;
    };
  }

export async function generateStaticParams(): Promise<PropsParams['params'][]> {
    return [];
}
    const params = projects.map((project) => ({
      slug: project.slug,
    }));

export default function page({ params }: Props) {

    const slug = params?.slug;
    const project = projects.find(project => project.slug === slug);

    if (!project) {
        notFound();
      }

  return (
    <MainLayout>
    <div className=" min-h-screen">
        <Header project={project} />
        <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <div className="flex flex-col">
          {project.image && (
            <Image
              src={project.image}
              alt={`image ilustration of project ${project.title}`}
              className="rounded border object-fill"
            />
          )}
          <p className="leading-7  mt-5">{project.description}</p>
          <p className="leading-7">
              Some of the technologies used in this project
          </p>
          <ul className="p-0 m-0 list-none flex gap-4 flex-wrap text-sm">
            {project.stack.map(tec => (
              <li key={tec}>
                {tec}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
    </MainLayout>
  )
}
