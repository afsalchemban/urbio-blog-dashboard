import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import BaseButton from "../common/BaseButton";
import ButtonWithLoading from "../common/ButtonWithLoading";

type PostFormData = {
    title: string;
    author: string;
    body: string;
};

type PostFormProps = {
    onSubmit?: (data: PostFormData) => void;
    isLoading: boolean;
};

const PostForm = ({ onSubmit, isLoading }: PostFormProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<PostFormData>({
        defaultValues: {
            title: "",
            author: "",
            body: "",
        },
    });

    const submitHandler = (data: PostFormData) => {
        if (onSubmit) onSubmit(data);
        else console.log("Submitted:", data);
    };

    return (
        <Card sx={{ width: "100%", boxShadow: 0, borderRadius: 2 }}>
            <CardContent sx={{ px: 0 }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'lighter',
                        color: 'text.secondary',
                        mb: 2, // Same gap as between form fields
                    }}
                >
                    Share your knowledge and ideas with the community.
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(submitHandler)}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        width: "100%",
                    }}
                >
                    <Controller
                        name="title"
                        control={control}
                        rules={{ required: "Title is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Title"
                                variant="outlined"
                                error={!!errors.title}
                                helperText={errors.title?.message}
                                fullWidth
                            />
                        )}
                    />

                    <Controller
                        name="author"
                        control={control}
                        rules={{ required: "Author is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Author"
                                variant="outlined"
                                error={!!errors.author}
                                helperText={errors.author?.message}
                                fullWidth
                            />
                        )}
                    />

                    <Controller
                        name="body"
                        control={control}
                        rules={{ required: "Body is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Body"
                                variant="outlined"
                                error={!!errors.body}
                                helperText={errors.body?.message}
                                multiline
                                rows={5}
                                fullWidth
                            />
                        )}
                    />

                    <ButtonWithLoading isLoading={isLoading} text="Submit Post" type="submit" />
                </Box>
            </CardContent>
        </Card>
    );
};

export default PostForm;
