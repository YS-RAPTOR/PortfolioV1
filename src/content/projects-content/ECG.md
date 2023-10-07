In this individual project, I embarked on a challenging journey into the realm of medical signal analysis, specifically focusing on the interpretation of ECG (Electrocardiogram) signals. It's important to note that I undertook this project as part of my university coursework, and at the outset, I had no prior experience with ECG systems. Through research, I discovered that ECG signals present formidable challenges due to inherent noise and their susceptibility to influence from various medical conditions. This complexity often makes accurate interpretation a task reserved for medical professionals.

The overarching goal of this project was to bridge the significant gap between the intricacies of ECG data and its accessibility to a broader audience, encompassing both laypersons and medical practitioners. Importantly, I want to emphasize that the primary aim of this design was never to replace the diagnostic expertise of doctors. Instead, it was conceived as an intermediary tool, providing insights and recommendations when abnormal readings were detected.

To achieve this ambitious goal, I established several critical objectives:

- Efficient Noise Filtering: The project aimed to develop a robust noise filtering system capable of enhancing signal clarity within ECG data.
- Artifact Labeling: Precision was essential in accurately labeling distinct ECG artifacts, including the QRS Complex, P wave, and T wave.
- Data Extraction: Extracting valuable information from the labeled artifacts, such as Heart Rate, PR Interval, QT Interval, and QRS Duration, was a pivotal aspect of the project.
- Information Display: The project aimed to present the results of the analysis in an easily comprehensible format.
- Results Evaluation: The system was designed to provide commentary on the normalcy of the results obtained.

![ECG signal features](/ECG1.webp "ECG Signal")

Efficient noise filtering and precise artifact labeling primarily catered to the needs of medical professionals in their analytical endeavors. However, the information extracted had the potential to benefit both medical practitioners and laypersons alike. Furthermore, the commentary on result normalcy was intended to empower individuals with a deeper understanding of the data's significance.

To execute these objectives effectively, the project was logically divided into two distinct components: the Heart Rate Monitor and the Heart Rate Analyzer. The Heart Rate Monitor was dedicated to the accurate reporting of Heart Rates from the supplied data, with precision as the top priority. In contrast, the Heart Rate Analyzer bore the responsibility of artifact labeling, data extraction, result presentation, and normalcy assessment.

![Data Before and After Filter](/ECG2.webp "Comparison of Before and After Filtration")

The final filter design incorporated a bandpass Butterworth filter with cutoff frequencies set at 0.5Hz to eliminate baseline wander and 10Hz to mitigate high-frequency noise often induced by powerline interference. The filter order was determined through a series of experiments and fine-tuning, striking a balance between noise reduction and signal detail preservation. Ultimately, a filter order of three was selected for optimal performance.

![Broad Overview of how the FindQRS Function Works](/ECG3.webp "FindQRS Function")

The flow chart above outlines the core operation of the algorithm. While the algorithm performed admirably with the initial data sample, it faced challenges when tested with other datasets. In certain cases, it missed detecting some R peaks, prompting necessary adjustments to the constants used in pass 1 and pass 2. Additionally, a biological constant was introduced, setting the minimum distance between two R peaks at 0.16s.

The selection of a threshold analysis approach over alternative methods, such as RR Interval analysis, was driven by its simplicity and efficiency. RR Interval analysis often encountered difficulties when confronted with samples containing irregular RR Intervals, leading to its exclusion. Furthermore, the chosen threshold analysis method consistently demonstrated superior performance and efficiency compared to RR Interval Analysis.

![Broad Overview of how the FindPT Function Works](/ECG4.webp "FindPT function")
![Broad Overview of How the DetectPT Function Works](/ECG5.webp "DetectPT function")

The architecture of the algorithm, as depicted in the flow chart, underwent iterations. Initially, it relied solely on amplitude for peak identification. However, it later evolved to consider the distance of each peak from the center. This adaptation was necessitated by the presence of numerous noise peaks with high amplitudes in certain samples, which negatively impacted results.

The process of information extraction from the detected artifacts followed a straightforward path:

- Heart Rate was calculated using the RR Interval, with the formula 60 divided by the RR Interval in seconds equating to the Heart Rate in beats per minute.
- Determining the QRS Interval involved finding the difference between the S Peak and Q Peak locations.
- Calculating the PR Interval was a slightly more complex process, requiring the identification of the P wave's starting point and the subsequent calculation of the interval between this starting point and the following Q peak.
- The QT Interval followed a similar methodology, with the interval being determined by the end of the T wave and the preceding Q Peak. In cases where a Q wave appeared at the data's very beginning, the QT Interval for that data point remained uncalculated.

The algorithm admirably achieved all its design goals, effectively eliminating noise, accurately labeling QRS Complexes, P waves, and T waves, and extracting vital information, including Heart Rate, PR Interval, QT Interval, and QRS Duration. Furthermore, it provided clear commentary on the normalcy of the results. The algorithm's modular design ensured both speed and accuracy.

Moving forward, several promising avenues for improvement await exploration. Wavelet analysis offers a potentially transformative approach, enabling simultaneous analysis in both the time and frequency domains, potentially yielding deeper insights. Machine learning models, particularly neural networks, have the potential to enhance artifact detection accuracy, particularly with the availability of a substantial dataset. Additionally, further investigation into advanced filtering methods, such as Chebyshev filters or wavelet transforms, may yield improvements in the algorithm's output.

This project holds particular significance for me as it was undertaken at a time when I had no prior experience with ECG signals. It underscores my ability to effectively research and deliver a functional solution for a challenging university assignment. The project also serves as a testament to my grasp of various digital signal processing techniques, including filtering, segmentation, and feature extraction. Importantly, it showcases my capacity for rapid learning, as this marked my first major project executed using MATLAB.