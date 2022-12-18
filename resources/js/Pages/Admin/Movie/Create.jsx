import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated/Index";
import InputError from "@/Components/InputError";
import { Head, useForm } from "@inertiajs/inertia-react";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Admin ~ Create Movie</title>
            </Head>
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4" />
            <form className="w-[600px]" onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div>
                        <InputLabel forInput="name" value="Name" />
                        <TextInput
                            type="text"
                            name="name"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Enter the name of the movie"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel forInput="category" value="Category" />
                        <TextInput
                            type="text"
                            name="category"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Enter the category of the movie"
                        />
                        <InputError
                            message={errors.category}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel forInput="video_url" value="Video Url" />
                        <TextInput
                            type="url"
                            name="video_url"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Enter the video url of the movie"
                        />
                        <InputError
                            message={errors.video_url}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel
                            forInput="thumbnail"
                            value="Thumbnail"
                            className="mb-4"
                        />
                        <TextInput
                            type="file"
                            name="thumbnail"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Insert thumbnail of the movie"
                        />
                        <InputError
                            message={errors.thumbnail}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel
                            forInput="rating"
                            value="Rating"
                            className="mb-4"
                        />
                        <TextInput
                            type="number"
                            name="rating"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Enter the rating of the movie"
                        />
                        <InputError message={errors.rating} className="mt-2" />
                    </div>
                    <div className="flex flex-row mt-4 items-center">
                        <InputLabel
                            forInput="is_featured"
                            value="Is Featured"
                            className="mr-3 mt-1"
                        />
                        <Checkbox
                            name="is_featured"
                            handleChange={(e) =>
                                setData("is_featured", e.target.checked)
                            }
                        />
                    </div>
                    <div>
                        <PrimaryButton
                            type="submit"
                            variant="primary"
                            className="mt-4"
                            processing={processing}
                        >
                            Save
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </Authenticated>
    );
}
