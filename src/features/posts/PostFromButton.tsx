import React from "react";
import Link from 'next/link';
import { Button } from "@mui/material";

const PostFromButton = () => {

    return (
        <Link href="/create" passHref>
            <Button
                variant="outlined"
                sx={{
                    borderRadius: 2, // Subtle border radius (e.g., 16px)
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    borderColor: 'text.primary', // Uses theme color
                    color: 'text.primary',
                    backgroundColor: '#fff', // Set the background to white
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.03)', // Subtle hover effect
                        borderColor: 'text.primary',
                    },
                    display: 'block', // Make sure the button is block-level so it takes full width and starts on a new line
                    marginTop: 2, // Add margin to the top for spacing
                    width: '100%', // Ensure the button spans the full width
                    maxWidth: '200px', // Optional: Restrict the width of the button for better design control
                    marginLeft: 'auto', // Push the button to the right
                    marginRight: 0, // Remove any default margin on the right side
                }}
            >
                Add new post
            </Button>



        </Link>
    );
};

export default PostFromButton;
