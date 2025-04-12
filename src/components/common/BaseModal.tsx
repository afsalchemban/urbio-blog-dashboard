import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

type BaseModalProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
};

const BaseModal: React.FC<BaseModalProps> = ({ open, onClose, title, children }) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            {title && (
                <DialogTitle
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontWeight: 600, // Adjust the fontWeight to make the title bolder
                    }}
                >
                    {title}
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
            )}
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
};

export default BaseModal;
