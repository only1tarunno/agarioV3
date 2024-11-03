 let currentStep = 1;
        

            function updateProgress() {
                // Show only the content for the current step
                document.querySelectorAll('.step-content').forEach((step, index) => {
                    step.classList.toggle('hidden', index + 1 !== currentStep);
                });

                // Apply completed styles to current and previous steps
                document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
                    const stepNumber = index + 1;
                    const innerIndicator = indicator.querySelector("span.inner-indicator");
                    const spanElement = indicator.querySelector('span');
                     const heading = indicator.querySelector('h4');

                    // Toggle text or image for each step based on the current step
                    if (spanElement) {
                        if (stepNumber < currentStep) {
                            // Completed step (add image with green background)
                            spanElement.innerHTML = `<img src="./img/checkmark.svg" class="w-[18px] lg:w-10" alt="checkmark">`;
                            spanElement.classList.add('bg-green-1');
                            spanElement.classList.remove('bg-white', 'border', 'text-green-1');
                        } else if (stepNumber === currentStep) {
                            // Current step (show text with green color and white background)
                            spanElement.innerHTML = `<img src="./img/checkmark.svg" class="w-[18px] lg:w-10" alt="checkmark">`;
                            spanElement.classList.add('bg-green-1');
                            spanElement.classList.remove('bg-white', 'border', 'text-green-1');
                        } else {
                            // Future steps (show text with green color and white background)
                            spanElement.innerHTML = stepNumber;
                            spanElement.classList.remove('bg-green-1');
                            spanElement.classList.add('bg-white', 'border', 'text-green-1');
                        }
                    }

                    // Ensure innerIndicator exists, then apply the `inner-indicatorbg` class if it's within the current step range
                    if (innerIndicator) {
                        if (index < currentStep - 1) {
                            innerIndicator.classList.add('inner-indicatorbg');
                        } else {
                            innerIndicator.classList.remove('inner-indicatorbg');
                        }
                    }
                     // Apply or remove text-green-1 class based on whether it's the current step
                    if (heading) {
                        if (stepNumber === currentStep) {
                            heading.classList.add('text-green-1');
                        } else {
                            heading.classList.remove('text-green-1');
                        }
                    }
                });

                // Adjust main bar width based on the step
                const progressBar = document.querySelector('.main-progress-bar span');
                const widths = ['0%', '30%', '65%', '100%'];
                progressBar.style.width = widths[currentStep - 1];
            }

            function nextStep() {
                if (currentStep < 4) {
                    currentStep++;
                    updateProgress();
                }
            }

            function previousStep() {
                if (currentStep > 1) {
                    currentStep--;
                    updateProgress();
                }
            }

            document.addEventListener('DOMContentLoaded', updateProgress);