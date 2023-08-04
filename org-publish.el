;; Code to convert the Org files to HTML

(require 'ox-publish)

;; (setq org-publish-use-timestamps-flag t)
;; (setq org-publish-cache t)
;; (setq org-publish-timestamp-directory "/home/runner/work/ahisu6.github.io/ahisu6.github.io/public/timestamps/")

(setq org-html-validation-link nil
      org-export-with-title nil
      org-html-head-include-scripts nil
      org-html-head-include-default-style nil
      org-export-with-sub-superscripts nil
      org-html-head "<link rel=\"stylesheet\" href=\"https://ahisu6.github.io/assets/css/main.css\" />")

;; (eval-after-load "ox-html" (setq org-html-prefer-user-labels t))

(setq org-publish-project-alist
      (list
       (list "ahisu6"
             :recursive t
             :base-directory "./src2"
             :publishing-function 'org-html-publish-to-html
             :publishing-directory "./public"
             :with-author nil
             :with-toc nil
             :section-numbers nil
             :time-stamp-file nil)))

;; Generate the site output
(org-publish-all t)
