import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer bg-white">
        <div className="md:py-73px px-6 pt-6 pb-10 md:w-7/12 w-full mx-auto">
          <div className="footer-logo mb-6 mb:mx-6 mx-0">
            <svg
              className="h-9"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 114.97 30.93"
            >
              <path
                id="logo"
                d="M4.5,12.2a5.37,5.37,0,0,0,2.16-.46,4.62,4.62,0,0,0,1.57-1.16,4.89,4.89,0,0,0,.94-1.66,6.48,6.48,0,0,0,.31-2,6.81,6.81,0,0,0-.33-2.19,4.8,4.8,0,0,0-1-1.79,4.29,4.29,0,0,0-1.68-1.2A5.79,5.79,0,0,0,4.11,1.3H3.06V11.91Zm-4.42.06.79-.07a2.8,2.8,0,0,0,.57-.08c.11,0,.17-.11.17-.17V1.59c0-.06-.05-.11-.15-.13a2.92,2.92,0,0,0-.72-.11L.1,1.29,0,1,4.43,1a8.73,8.73,0,0,1,2.87.39,6,6,0,0,1,2,1.14,4.56,4.56,0,0,1,1.3,1.77,5.54,5.54,0,0,1,.45,2.27,5.87,5.87,0,0,1-.47,2.37,5.3,5.3,0,0,1-1.34,1.9,6.27,6.27,0,0,1-2.19,1.31,9,9,0,0,1-3,.46h-4ZM17.57,7a4.58,4.58,0,0,0-.09-.9,1.94,1.94,0,0,0-.31-.76,1.49,1.49,0,0,0-.52-.51,1.29,1.29,0,0,0-.74-.2,1.63,1.63,0,0,0-.75.18,2.37,2.37,0,0,0-.66.52,3.19,3.19,0,0,0-.56.75,3.94,3.94,0,0,0-.35.94ZM15.8,12.78a3.68,3.68,0,0,1-1.47-.3,3.74,3.74,0,0,1-1.16-.85,4.14,4.14,0,0,1-.78-1.27,4.73,4.73,0,0,1-.27-1.58,5,5,0,0,1,.29-1.67,4.46,4.46,0,0,1,.81-1.4,3.9,3.9,0,0,1,1.28-1,3.84,3.84,0,0,1,1.6-.35,3.59,3.59,0,0,1,1.22.2,2.67,2.67,0,0,1,.9.54,2.24,2.24,0,0,1,.55.81,2.29,2.29,0,0,1,.2,1v.47H13.58a3,3,0,0,0-.05.42v.46a4.5,4.5,0,0,0,.22,1.46,3.66,3.66,0,0,0,.55,1.1,2.6,2.6,0,0,0,2.08,1,2.93,2.93,0,0,0,1.39-.32,3.13,3.13,0,0,0,1.12-1.08l.2.11a5.33,5.33,0,0,1-1.4,1.66A3.12,3.12,0,0,1,15.8,12.78Zm4-.52h.49a2.74,2.74,0,0,0,.5-.07.22.22,0,0,0,.15-.21V2.11a2.44,2.44,0,0,0,0-.54.56.56,0,0,0-.09-.31.35.35,0,0,0-.17-.19L20.39,1l-.7-.15V.65L22.3,0V12a.18.18,0,0,0,.11.17,4.62,4.62,0,0,0,.65.07h.46v.28H19.8Zm5.93-9.55A.77.77,0,0,1,25,2.4a1,1,0,0,1-.23-.61A1.1,1.1,0,0,1,25,1.16a.9.9,0,0,1,1.27-.11l.11.11a1,1,0,0,1,0,1.26A.8.8,0,0,1,25.73,2.71ZM24.1,12.26h.52a4.29,4.29,0,0,0,.5-.07.22.22,0,0,0,.15-.21V6.56a5.81,5.81,0,0,0,0-.59.74.74,0,0,0-.09-.36A.45.45,0,0,0,25,5.4a1.35,1.35,0,0,0-.34-.11l-.57-.09V5l2.49-.63V12c0,.08,0,.13.13.17a4.2,4.2,0,0,0,.62.07h.46l.06.28H24.05Zm8,.52a3.67,3.67,0,0,1-1.46-.3,3.74,3.74,0,0,1-1.16-.85,4.12,4.12,0,0,1-.77-1.27,4.25,4.25,0,0,1-.28-1.58A4.92,4.92,0,0,1,28.75,7a4.14,4.14,0,0,1,.86-1.4,4,4,0,0,1,3-1.29,3.76,3.76,0,0,1,1,.13,2.88,2.88,0,0,1,.83.35,1.77,1.77,0,0,1,.55.54,1.19,1.19,0,0,1,.21.68.85.85,0,0,1-.82.88h0a.81.81,0,0,1-.83-1,.58.58,0,0,1,.13-.44.35.35,0,0,0,.12-.23c0-.11-.18-.23-.44-.36a1.59,1.59,0,0,0-.85-.22,2.31,2.31,0,0,0-1,.25,3,3,0,0,0-.88.74A3.65,3.65,0,0,0,30,6.78a4.56,4.56,0,0,0-.2,1.42,4.66,4.66,0,0,0,.22,1.48,3.59,3.59,0,0,0,.61,1.14,2.86,2.86,0,0,0,.92.74,2.73,2.73,0,0,0,1.16.26,2.81,2.81,0,0,0,1.36-.32,3,3,0,0,0,1.09-1.08l.22.11A5.15,5.15,0,0,1,34,12.19a3.08,3.08,0,0,1-1.9.59ZM37.66,2.71A.79.79,0,0,1,37,2.4a1,1,0,0,1-.22-.61A1,1,0,0,1,37,1.16a.77.77,0,0,1,.7-.33.75.75,0,0,1,.64.28,1,1,0,0,1,0,1.26A.77.77,0,0,1,37.66,2.71ZM36,12.26h.51a4.29,4.29,0,0,0,.5-.07A.22.22,0,0,0,37.2,12V6.56a2.91,2.91,0,0,0,0-.59.74.74,0,0,0-.09-.36.38.38,0,0,0-.22-.21,1.28,1.28,0,0,0-.33-.11L36,5.2V5l2.49-.63V12c0,.08,0,.13.13.17a4.5,4.5,0,0,0,.63.07h.46v.28H36Zm8.52.22a2.05,2.05,0,0,0,1-.29,2.81,2.81,0,0,0,.81-.8,3.72,3.72,0,0,0,.54-1.2,5.31,5.31,0,0,0,.2-1.43,7.07,7.07,0,0,0-.24-1.94,3.21,3.21,0,0,0-.77-1.44,2.61,2.61,0,0,0-.72-.51,2,2,0,0,0-.94-.2A2,2,0,0,0,43.4,5a2.79,2.79,0,0,0-.83.81,4.14,4.14,0,0,0-.51,1.16,5.14,5.14,0,0,0-.19,1.4,7.47,7.47,0,0,0,.26,2,3.35,3.35,0,0,0,.79,1.44,2.3,2.3,0,0,0,.7.5A2.38,2.38,0,0,0,44.56,12.48Zm0,.31a4.19,4.19,0,0,1-1.64-.31,4.31,4.31,0,0,1-1.31-.88,4.38,4.38,0,0,1-1.21-3A4.29,4.29,0,0,1,40.71,7a4.67,4.67,0,0,1,.88-1.36,4,4,0,0,1,3-1.24,3.91,3.91,0,0,1,1.62.32,3.52,3.52,0,0,1,1.29.86,3.62,3.62,0,0,1,.8,1.31,4.2,4.2,0,0,1,.32,1.64,4.71,4.71,0,0,1-.32,1.7,4.39,4.39,0,0,1-.86,1.38,4.07,4.07,0,0,1-2.93,1.23Zm11-1.54h0l-.65.53a5.79,5.79,0,0,1-.72.5,4.92,4.92,0,0,1-.81.37,2.82,2.82,0,0,1-.86.14,2.13,2.13,0,0,1-1.5-.55,2.66,2.66,0,0,1-.57-1.86V5.07a.14.14,0,0,0-.09,0A.5.5,0,0,0,50.12,5h-.88l-.06-.26h2.58v5.36a2,2,0,0,0,.43,1.44,1.79,1.79,0,0,0,1.27.43,2.61,2.61,0,0,0,1.2-.28,6.65,6.65,0,0,0,1-.66V5.62c0-.28,0-.46-.15-.53a1.27,1.27,0,0,0-.63-.17H54.4l0-.26H57v6.82a1.14,1.14,0,0,0,0,.37.54.54,0,0,0,.32.13l.9.15v.2l-2.52.55Zm5.58,1.54a6,6,0,0,1-1.27-.11,5.21,5.21,0,0,1-1.09-.31l-.22-2.26h.32l.42,1.1a2.94,2.94,0,0,0,.85.94,2,2,0,0,0,1.11.33A2,2,0,0,0,62.58,12a1.49,1.49,0,0,0,.52-1.16,1.33,1.33,0,0,0-.57-1.16A4.62,4.62,0,0,0,61.05,9l-.81-.33a3.68,3.68,0,0,1-.73-.45A2.29,2.29,0,0,1,59,7.58a2.23,2.23,0,0,1-.19-.92A1.9,1.9,0,0,1,59,5.75,2.2,2.2,0,0,1,59.56,5a2.4,2.4,0,0,1,.85-.48,3,3,0,0,1,1.07-.19,4.31,4.31,0,0,1,.88.09,4.12,4.12,0,0,1,.78.23l.59-.19.11,2.21h-.32l-.79-1.58a3.08,3.08,0,0,0-.59-.33,1.8,1.8,0,0,0-.76-.14A1.68,1.68,0,0,0,60.2,5a1.29,1.29,0,0,0-.4,1,1.33,1.33,0,0,0,.13.62,1.54,1.54,0,0,0,.37.47,3.6,3.6,0,0,0,.61.33l.79.29c.31.11.6.24.89.37a2.86,2.86,0,0,1,.77.46,2,2,0,0,1,.76,1.68,2.28,2.28,0,0,1-.22,1,2.49,2.49,0,0,1-.59.81,2.72,2.72,0,0,1-1,.55,3.39,3.39,0,0,1-1.22.19ZM.06,25.45l.79-.08c.51-.05.76-.14.76-.27V14.77q0-.09-.15-.12a2.78,2.78,0,0,0-.7-.12l-.68,0L0,14.2H8.61l.24,3.28H8.56l-.19-.75a5.87,5.87,0,0,0-.42-1,2.34,2.34,0,0,0-.59-.7,2.31,2.31,0,0,0-.94-.4,6.77,6.77,0,0,0-1.49-.13H3.06v5.07H4.34a4.76,4.76,0,0,0,1-.06A2.65,2.65,0,0,0,6,19.35.92.92,0,0,0,6.35,19a3,3,0,0,0,.24-.58l.19-.53H7l-.37,3.72H6.41V21.1a1.83,1.83,0,0,0-.11-.61A.59.59,0,0,0,6,20.16,1.5,1.5,0,0,0,5.3,20a9.45,9.45,0,0,0-1.07-.07H3.05v5.44l2,.05a6.76,6.76,0,0,0,1.68-.18,3.27,3.27,0,0,0,1.07-.5A2.33,2.33,0,0,0,8.46,24a4.81,4.81,0,0,0,.46-.94l.23-.72h.31l-.63,3.39H0Zm10,0,.51-.08a1.57,1.57,0,0,0,.69-.29,5.37,5.37,0,0,0,.84-1L13.65,22l-2.1-2.87a4.52,4.52,0,0,0-.59-.72.89.89,0,0,0-.55-.26H10L10,17.88h3.69l-.06.25-.46.06c-.24,0-.38.1-.4.24a1,1,0,0,0,.26.64l1.43,2h0l1.25-1.84c.47-.67.42-1-.14-1.07l-.5-.05L15,17.86h3.11v.25l-.5.06a1.18,1.18,0,0,0-.37.09,1.59,1.59,0,0,0-.35.22,4.59,4.59,0,0,0-.37.39c-.13.16-.29.36-.46.61L14.7,21.32l2.24,3.17c.25.32.45.55.59.7a.84.84,0,0,0,.54.26h.37l0,.27H14.76v-.25l.44-.08c.47-.05.52-.34.15-.86l-1.57-2.27h0l-1.44,2.1a1.34,1.34,0,0,0-.33.76c0,.17.16.27.44.29l.57.06.06.25H10Zm13.14.14a2,2,0,0,0,1-.27,2.43,2.43,0,0,0,.77-.76,3.85,3.85,0,0,0,.5-1.16,6,6,0,0,0,.16-1.46,5.18,5.18,0,0,0-.18-1.36,3.65,3.65,0,0,0-.52-1.09,2.33,2.33,0,0,0-.81-.72,2.13,2.13,0,0,0-1.07-.27,2.32,2.32,0,0,0-1.23.33,3.79,3.79,0,0,0-.94.75v4.59a3.4,3.4,0,0,0,1,1,2.26,2.26,0,0,0,1.3.44Zm-4.74,4.52H19a4,4,0,0,0,.5-.08.18.18,0,0,0,.16-.18h0V19.73a5.81,5.81,0,0,0,0-.59.81.81,0,0,0-.09-.37.46.46,0,0,0-.21-.18.76.76,0,0,0-.33-.11l-.59-.09V18.2l2.51-.62v1.54H21a5.6,5.6,0,0,1,1.21-1,2.94,2.94,0,0,1,1.58-.46,3.19,3.19,0,0,1,2.36,1.09A3.48,3.48,0,0,1,26.8,20a5,5,0,0,1-.1,3.41,4.46,4.46,0,0,1-.9,1.41,4.37,4.37,0,0,1-1.31.9A3.75,3.75,0,0,1,23,26a4.35,4.35,0,0,1-1.14-.15,4.15,4.15,0,0,1-.92-.31h0v4.31c0,.07,0,.11.13.13a2.59,2.59,0,0,0,.62.1h.8l.05.28H18.41ZM33.4,20.23a3.88,3.88,0,0,0-.1-.9,1.94,1.94,0,0,0-.31-.76,1.41,1.41,0,0,0-.52-.51,1.27,1.27,0,0,0-.73-.21A1.65,1.65,0,0,0,31,18a2.34,2.34,0,0,0-.66.51,3.25,3.25,0,0,0-.56.76,3.55,3.55,0,0,0-.35.94ZM31.63,26a3.94,3.94,0,0,1-1.48-.29A3.74,3.74,0,0,1,29,24.82a4.12,4.12,0,0,1-.77-1.27A4.34,4.34,0,0,1,27.94,22a5,5,0,0,1,.29-1.71,4.3,4.3,0,0,1,.82-1.4,3.63,3.63,0,0,1,2.87-1.35,3.36,3.36,0,0,1,1.22.2,2.43,2.43,0,0,1,.9.54,2.16,2.16,0,0,1,.55.81,2.46,2.46,0,0,1,.21,1,1,1,0,0,1,0,.24v.24H29.42a3,3,0,0,0-.06.42v.46a4.51,4.51,0,0,0,.23,1.46,3.56,3.56,0,0,0,.6,1.14,2.8,2.8,0,0,0,.93.74,2.58,2.58,0,0,0,1.16.25,2.88,2.88,0,0,0,1.38-.31,3.08,3.08,0,0,0,1.12-1.09l.21.11a5.33,5.33,0,0,1-1.4,1.66A3.07,3.07,0,0,1,31.63,26Zm4.12-.51h.48a3.12,3.12,0,0,0,.52-.08.2.2,0,0,0,.14-.2v-5.4a5.81,5.81,0,0,0,0-.59,1,1,0,0,0-.1-.37.39.39,0,0,0-.2-.2.76.76,0,0,0-.33-.11l-.57-.09v-.19l2.49-.62v2.87h0a7.44,7.44,0,0,1,1.12-2.19,1.74,1.74,0,0,1,1.38-.74,1,1,0,0,1,.76.28.82.82,0,0,1,.29.64,1,1,0,0,1-.22.63.74.74,0,0,1-.62.27.93.93,0,0,1-.59-.25,1,1,0,0,1-.33-.72,1.82,1.82,0,0,0-1,.83,7.22,7.22,0,0,0-.82,1.89v4.11a.16.16,0,0,0,.11.16,4.07,4.07,0,0,0,.61.08h.75l.06.27h-4Zm8.07-9.55a.83.83,0,0,1-.7-.31,1,1,0,0,1,0-1.24.77.77,0,0,1,.7-.33.75.75,0,0,1,.68.31,1,1,0,0,1,0,1.26A.82.82,0,0,1,43.82,15.9Zm-1.63,9.55h.52a4,4,0,0,0,.5-.08.19.19,0,0,0,.15-.2v-5.4a5.81,5.81,0,0,0,0-.59.81.81,0,0,0-.09-.37.47.47,0,0,0-.22-.2,1,1,0,0,0-.34-.11l-.57-.09v-.19l2.49-.62v7.61a.17.17,0,0,0,.13.16,4.2,4.2,0,0,0,.62.08h.46l.06.27H42.14ZM52,20.23a4.58,4.58,0,0,0-.09-.9,2,2,0,0,0-.32-.76,1.39,1.39,0,0,0-.51-.51,1.3,1.3,0,0,0-.74-.21,1.65,1.65,0,0,0-.76.19,2.34,2.34,0,0,0-.66.51,3,3,0,0,0-.55.76,3.43,3.43,0,0,0-.35.94ZM50.24,26a3.4,3.4,0,0,1-2.64-1.14,4.12,4.12,0,0,1-.77-1.27A4.34,4.34,0,0,1,46.55,22a5,5,0,0,1,.3-1.71,4,4,0,0,1,.81-1.4,3.63,3.63,0,0,1,2.87-1.35,3.36,3.36,0,0,1,1.22.2,2.43,2.43,0,0,1,.9.54,2.4,2.4,0,0,1,.56.81,2.66,2.66,0,0,1,.2,1,1,1,0,0,1,0,.24,1,1,0,0,1,0,.24H48A2.94,2.94,0,0,0,48,21a3.53,3.53,0,0,0,0,.46,4.5,4.5,0,0,0,.22,1.46A3.59,3.59,0,0,0,48.86,24a2.6,2.6,0,0,0,2.08,1,2.88,2.88,0,0,0,1.38-.31,3,3,0,0,0,1-1.1l.2.11a5.09,5.09,0,0,1-1.4,1.66A3,3,0,0,1,50.24,26Zm4.12-.51h.48a3.12,3.12,0,0,0,.52-.08.19.19,0,0,0,.15-.2v-5.4a5.81,5.81,0,0,0,0-.59.81.81,0,0,0-.09-.37.41.41,0,0,0-.21-.2.76.76,0,0,0-.33-.11l-.58-.11V18.2l2.51-.62v1.53h.06c.19-.17.41-.34.64-.51a7.57,7.57,0,0,1,.74-.52,3.52,3.52,0,0,1,.81-.38,2.73,2.73,0,0,1,.89-.15,2.34,2.34,0,0,1,.79.13,1.48,1.48,0,0,1,.56.43A2.56,2.56,0,0,1,61.91,20v5.22a.19.19,0,0,0,.11.15,3.75,3.75,0,0,0,.67.11h.46v.27H59.49l0-.27H60a2.54,2.54,0,0,0,.54-.09.21.21,0,0,0,.11-.19V20.36a1.93,1.93,0,0,0-.43-1.42A1.72,1.72,0,0,0,59,18.52a2.49,2.49,0,0,0-1.22.29,5.09,5.09,0,0,0-1,.66v5.72a.17.17,0,0,0,.13.16,4.66,4.66,0,0,0,.64.08H58l.06.27H54.3Zm13,.51a3.42,3.42,0,0,1-2.62-1.14A4.12,4.12,0,0,1,64,23.55,4.55,4.55,0,0,1,63.69,22,4.87,4.87,0,0,1,64,20.23a4.14,4.14,0,0,1,.86-1.4,3.85,3.85,0,0,1,1.31-.94,4.12,4.12,0,0,1,1.66-.35,3.76,3.76,0,0,1,1,.13,2.88,2.88,0,0,1,.83.35,1.64,1.64,0,0,1,.55.53,1.2,1.2,0,0,1,.21.69.86.86,0,0,1-.26.64.82.82,0,0,1-.57.24.9.9,0,0,1-.67-.29.85.85,0,0,1-.16-.72.61.61,0,0,1,.13-.45.38.38,0,0,0,.13-.22c0-.11-.19-.23-.45-.37a1.67,1.67,0,0,0-.84-.22,2.31,2.31,0,0,0-1.06.26,2.72,2.72,0,0,0-.88.74A3.53,3.53,0,0,0,65.3,20a4.87,4.87,0,0,0-.2,1.42,4.94,4.94,0,0,0,.2,1.48A3.59,3.59,0,0,0,65.91,24a2.86,2.86,0,0,0,.92.74A2.58,2.58,0,0,0,68,25a2.8,2.8,0,0,0,1.36-.31,3,3,0,0,0,1.09-1.09l.22.11a5,5,0,0,1-1.36,1.66,3.05,3.05,0,0,1-1.89.59Zm9.44-5.73a4.58,4.58,0,0,0-.09-.9,2,2,0,0,0-.32-.76,1.39,1.39,0,0,0-.51-.51,1.3,1.3,0,0,0-.74-.21,1.52,1.52,0,0,0-.75.19,2.38,2.38,0,0,0-.67.51,3,3,0,0,0-.55.76,3.43,3.43,0,0,0-.35.94ZM75,26a3.93,3.93,0,0,1-1.47-.29,3.78,3.78,0,0,1-1.17-.85,4.12,4.12,0,0,1-.77-1.27A4.55,4.55,0,0,1,71.34,22a5,5,0,0,1,.3-1.71,4.46,4.46,0,0,1,.81-1.4,3.63,3.63,0,0,1,2.88-1.35,3.34,3.34,0,0,1,1.21.2,2.43,2.43,0,0,1,.9.54,2.07,2.07,0,0,1,.56.81,2.66,2.66,0,0,1,.2,1,1,1,0,0,1,0,.24,1,1,0,0,1,0,.24H72.82a2.94,2.94,0,0,0,0,.42,3.53,3.53,0,0,0,0,.46A4.5,4.5,0,0,0,73,22.87,3.59,3.59,0,0,0,73.65,24a2.76,2.76,0,0,0,.92.74,2.58,2.58,0,0,0,1.16.25,2.88,2.88,0,0,0,1.38-.31,3.19,3.19,0,0,0,1.13-1.09l.2.11A5.09,5.09,0,0,1,77,25.37a3.07,3.07,0,0,1-2,.59Zm6.8,0a7.69,7.69,0,0,1-1.27-.11,5.89,5.89,0,0,1-1.09-.31l-.17-2.23h.32L80,24.38a2.94,2.94,0,0,0,.85.94,2,2,0,0,0,1.11.33,2,2,0,0,0,1.34-.42,1.47,1.47,0,0,0,.55-1.12,1.36,1.36,0,0,0-.55-1.21,5.08,5.08,0,0,0-1.48-.72,5.73,5.73,0,0,1-.81-.33,4,4,0,0,1-.71-.44,2.29,2.29,0,0,1-.52-.64,2.12,2.12,0,0,1-.18-.93,1.88,1.88,0,0,1,.2-.9,2.26,2.26,0,0,1,1.4-1.22,3.25,3.25,0,0,1,1.07-.18,4.31,4.31,0,0,1,.88.09,4.1,4.1,0,0,1,.78.22l.59-.18.11,2.21H84.3l-.75-1.55A3.08,3.08,0,0,0,83,18a1.81,1.81,0,0,0-.76-.15,1.74,1.74,0,0,0-1.18.39,1.29,1.29,0,0,0-.4,1,1.33,1.33,0,0,0,.13.62,1.6,1.6,0,0,0,.4.46,2.4,2.4,0,0,0,.61.33l.79.3c.3.11.6.23.89.37a2.86,2.86,0,0,1,.77.46,2,2,0,0,1,.56.68,2.16,2.16,0,0,1,.2,1,2.28,2.28,0,0,1-.22,1,2.6,2.6,0,0,1-.59.81,2.72,2.72,0,0,1-1,.55,3.47,3.47,0,0,1-1.28.16Z"
                fill="currentColor"
              ></path>
              <g>
                <path
                  d="M86.46,30.76c-.18-.05-.24-.17-.16-.31a8.57,8.57,0,0,1,.68-.86c-.37-.22-.43-.34-.28-.57.7-1.1,2.66-4,3.74-5.47a2.07,2.07,0,0,1-.49-.88c0-.12,0-.2.25-.28a7.63,7.63,0,0,1,2.11-.29,3.75,3.75,0,0,1,1.86.37,1.57,1.57,0,0,1,.5,2.16,4.33,4.33,0,0,1-1.87,1.74,1.41,1.41,0,0,1,.68,1,2,2,0,0,1-.72,1.71,7.44,7.44,0,0,1-4.86,1.86A5.69,5.69,0,0,1,86.46,30.76Zm6.16-3.38a3.68,3.68,0,0,0-2.4-.68c-.6.94-1.25,1.9-1.77,2.65C90.76,29.28,92.48,28.46,92.62,27.38Zm1.68-3.7a1.68,1.68,0,0,0-1.21-.32,4.54,4.54,0,0,0-1.42.24.71.71,0,0,1,0,.6c-.21.42-.51.93-.84,1.48C92.76,25.38,94,24.56,94.3,23.68Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M93.78,30.57c-.52-.36-.52-.69-.18-1.45.55-1.28,3.37-4.74,4.64-7a.18.18,0,0,1,.27-.08,2.17,2.17,0,0,1,.71.6c.18.26.18.56-.26,1.34-.72,1.27-2.94,4-3.6,5.48,1.53-.22,3.15-.4,3.6-.4.09,0,.1,0,.08.12-.08.3-.18.48-.7.65a34.13,34.13,0,0,1-3.72,1C94.27,30.91,94.14,30.82,93.78,30.57Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M100.57,30.31a1.79,1.79,0,0,1-1-1.79,5.69,5.69,0,0,1,1.19-3.1c1.33-1.87,3.45-3.29,4.58-3.29a1.28,1.28,0,0,1,1,.54,1.87,1.87,0,0,1,.86,1.81,6.13,6.13,0,0,1-.8,2.75c-1.36,2.38-3.35,3.53-4.63,3.53A2.42,2.42,0,0,1,100.57,30.31Zm.82-.79c2.36-.48,5-3.37,5-5.46a1.2,1.2,0,0,0-.33-.93,9.1,9.1,0,0,0-3.71,3.19A5,5,0,0,0,101.39,29.52Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M107.62,30.18c-.93-.78-1.08-2.31.1-4C109.27,24.05,113,22,114.09,22c.3,0,.46.16.69.54s.21.73.12.77c-2.65,1.16-4.9,2.4-6.21,4.29a2.86,2.86,0,0,0-.59,1.87,6.44,6.44,0,0,0,4-1.69c-.24.08-.57.16-.93.26s-.44.06-.53-.11a2.73,2.73,0,0,1-.26-.72c0-.15,0-.21.13-.24.53-.12,2.88-.51,3.59-.57.1,0,.1.12,0,.2a7.51,7.51,0,0,0-.64.66,4.35,4.35,0,0,1-1,.42,4.91,4.91,0,0,1-.1.73,1.72,1.72,0,0,1-.45.82A4.78,4.78,0,0,1,109,30.82,1.66,1.66,0,0,1,107.62,30.18Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </div>
          <div className="footer-content flex justify-between text-footer-text-grey flex-col md:flex-row">
            <div className="footer-details md:w-1/4 w-full md:block hidden">
              <p className="text-xs mb-6">
                Delicious Experiences helps companies{" "}
                <span className="font-bold">bring remote teams together</span>{" "}
                to celebrate and deepen their bond,{" "}
                <span className="font-bold">
                  strengthen connections with clients
                </span>
                , and{" "}
                <span className="font-bold">improve employee happiness.</span>{" "}
                Our unique culinary experiences focus on bringing people
                together through engaging, fun, virtual, hands-on events that
                help catapult your teams and clients to a different time and
                place.
              </p>

              <p className="text-xs mt-3.5 hidden md:block">
                &copy; Delicious Experiences 2023
              </p>
            </div>

            <div className="mobile-social-link md:hidden block mb-6">
              <FontAwesomeIcon
                className="hover:text-blue-700 transition-all mr-3 cursor-pointer"
                icon={faFacebookF}
              />
              <FontAwesomeIcon
                className="hover:text-blue-700 transition-all mr-3 cursor-pointer"
                icon={faInstagram}
              />
            </div>

            <div className="footer-nav md:w-1/12 w-full">
              <ul className="list-none font-Freight-book">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">FAQ</li>
              </ul>
            </div>

            <div className="footer-imp-link md:w-1/12 w-full">
              <ul className="list-none font-Freight-book">
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Contact</li>
                <li className="cursor-pointer">Host an experience</li>
                <li className="cursor-pointer">Blog</li>
              </ul>
            </div>

            <div className="terms-service-social md:w-1/6 w-full">
              <div className="social-link md:block hidden">
                <FontAwesomeIcon
                  className="hover:text-blue-700 transition-all mr-3 cursor-pointer"
                  icon={faFacebookF}
                />
                <FontAwesomeIcon
                  className="hover:text-blue-700 transition-all mr-3 cursor-pointer"
                  icon={faInstagram}
                />
              </div>

              <p className="text-xs mt-6 block md:hidden">
                &copy; Delicious Experiences 2023
              </p>

              <div className="terms-service mt-6">
                <ul>
                  <li className="text-xs text-footer-terms-grey mb-2 cursor-pointer">
                    Terms Of Service
                  </li>
                  <li className="text-xs text-footer-terms-grey mb-2 cursor-pointer">
                    Privacy Policy
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
