import { useState } from "react";
import useInterval from "./useInterval";

export default function useSlider({
    slideCurrent = 0,
    total = 0,
    enabled = false,
    useLoaded = false,
    speed = 1000,
    loop = true,
}) {

    const [offset, setOffSet] = useState(slideCurrent);
    const [items, setItems] = useState([]);

    function incrementOffset() {
        nextSlide()
    }

    function prevSlide() {
        if (offset === 0) {
            setOffSet(loop ? total - 1 : 0);
        } else {
            setOffSet(offset - 1);
        }
    }

    function nextSlide() {
        if (offset === total - 1) {
            setOffSet(loop ? 0 : offset);
        } else {
            setOffSet(offset + 1);
        }
    }

    function addItem(ref) {
        setItems([...items, ref]);
    }

    const loaded = useLoaded ? items.length === total : true;

    useInterval(() => {
        if (loaded && enabled && offset < total) {
            incrementOffset();
        }
    }, speed);

    return { offset, addItem, prevSlide, nextSlide };
}