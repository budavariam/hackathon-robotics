import { sendTwistMessage } from "../robot/communicate";
import "./overlaygui.css";
import { useRef, useEffect, useState } from "react";


interface OverlayGUIProps {
  data?: number
  show?: boolean
}
function OverlayGUI(props: OverlayGUIProps) {
  if (!props?.show) {
    return null;
  }

  const handleClick = () => {
    const event = new CustomEvent("hackathonGuiEvent", {
      detail: { message: "Hello from react...", asd: "bsd" },
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(event);
    sendTwistMessage();
  };
  return (
    <div className="custom-gui">
      <div className="control">
        {/* {value} */}
        <button onClick={handleClick}>🎮</button>
      </div>
    </div>
  );
}

function CanvasFrame() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      contextRef.current = ctx;

      // Draw a placeholder image
      const placeholderImage = new Image();
      placeholderImage.src = 'assets/loader-thumb.jpg';
      placeholderImage.onload = () => {
        ctx.drawImage(placeholderImage, 0, 0, canvas.width, canvas.height);
      };
    } else {
      console.error('canvasRef is not attached to the DOM.');
    }
  }, []);

  // Function to update the canvas with a Uint8Array
  const updateCanvas = (uint8Array, width, height) => {
    const ctx = contextRef.current;
    if (!ctx) return;
    // Create ImageData from Uint8Array
    const imageData = new ImageData(new Uint8ClampedArray(uint8Array), width, height);
    // Clear the canvas and draw the new image data
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.putImageData(imageData, 0, 0);
  };

  // Expose the update function to the window
  window.updateCanvas = updateCanvas;

  // Function to update the canvas with a JPEG Uint8Array
  const updateCanvasWithJPEG = (jpegUint8Array) => {
    const ctx = contextRef.current;
    if (!ctx) return;

    // Convert Uint8Array to a Blob
    const blob = new Blob([jpegUint8Array], { type: 'image/jpeg' });
    const url = URL.createObjectURL(blob);

    // Create an image element and set the source to the object URL
    const img = new Image();
    img.src = url;

    img.onload = () => {
      // Draw the image on the canvas
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
      // Revoke the object URL to free memory
      URL.revokeObjectURL(url);
    };

    img.onerror = (error) => {
      console.error('Error loading image:', error);
    };
  };

  // Expose the update function to the window
  window.updateCanvasWithJPEG = updateCanvasWithJPEG;

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      <div className={`canvas-container ${isZoomed ? 'zoomed' : ''}`}>
        <canvas
          ref={canvasRef}
          width="320"
          height="180"
          className="canvas"
          onClick={toggleZoom}
        />
      </div>

      {isZoomed && (
        <div className="overlay" onClick={toggleZoom} />
      )}
    </>
  );
}

export { OverlayGUI, CanvasFrame };
