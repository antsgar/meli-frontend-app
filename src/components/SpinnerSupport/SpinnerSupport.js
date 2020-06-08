import React, { useState, useEffect } from "react";
import Router from "next/router";
import { Spinner } from "..";
import styles from "./SpinnerSupport.module.scss";

const SpinnerSupport = ({ children }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const setLoadingTrue = () => {
            setLoading(true);
        };

        const setLoadingFalse = () => {
            setLoading(false);
        };

        Router.events.on("routeChangeStart", setLoadingTrue);
        Router.events.on("routeChangeComplete", setLoadingFalse);
        Router.events.on("routeChangeError", setLoadingFalse);

        return () => {
            Router.events.off("routeChangeStart", setLoadingTrue);
            Router.events.off("routeChangeComplete", setLoadingFalse);
            Router.events.off("routeChangeEnd", setLoadingTrue);
        };
    });

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loadingContainer}>
                    <Spinner />
                </div>
            ) : (
                children
            )}
        </div>
    );
};

export default SpinnerSupport;
