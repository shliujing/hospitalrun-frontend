export default {
  dashboard: {
    title: 'Que voulez-vous faire?'
  },
  navigation: {
    imaging: 'Imagerie',
    inventory: 'Inventaire',
    patients: 'Patients',
    appointments: 'Rendez-vous',
    medication: 'Médicament',
    labs: 'Labos',
    billing: 'Facturation',
    administration: 'Administration',
    subnav: {
      requests: 'Demandes',
      items: 'Articles',
      completed: 'Traité',
      new_request: 'Nouvelle demande',
      inventory_received: 'Inventaire reçu',
      reports: 'Rapports',
      patient_listing: 'Liste des patients',
      new_patient: 'Nouveau patient',
      this_week: 'Cette semaine',
      today: 'Aujourd\'hui',
      search: 'Rechercher',
      add_appointment: 'Ajouter un rendez-vous',
      dispense: 'Dispenser',
      return_medication: 'Retourner un Médicament',
      invoices: 'Factures',
      new_invoice: 'Nouvelle facture',
      prices: 'Prix',
      price_profiles: 'Profils de prix',
      lookup_lists: 'Listes de référence',
      address_fields: 'Champs d\'adresse',
      load_db: 'Importer une BD',
      users: 'Utilisateurs',
      new_user: 'Nouvel utilisateur',
      admitted_patients: 'patients admis',
      missed: 'Manqué',
      user_roles: 'Rôles de l\'utilisateur'
    },
    actions: {
      logout: 'Deconnexion',
      login: 'Connexion'
    },
    about: 'À propos de HospitalRun'
  },
  user: {
    plus_new_user: '+ nouvel utilisateur',
    users_page_tile: 'Liste des Utilisateurs'
  },
  admin: {
    address_options: 'Options d\'adresse',
    lookup_lists: 'Listes de référence',
    load_db: 'Importer une BD',
    users: 'Utilisateurs',
    address: {
      address1_label: 'Label de l\'adresse 1',
      address2_label: 'Label de l\'adresse 2',
      address3_label: 'Label de l\'adresse 3',
      address4_label: 'Label de l\'adresse 4',
      include1_label: 'Label de l\'include 1',
      include2_label: 'Label de l\'include 2',
      include3_label: 'Label de l\'include 3',
      include4_label: 'Label de l\'include 4',
      titles: {
        options_saved: 'Options enregistrées'
      },
      messages: {
        address_saved: 'Les options d\'adresse ont été enregistrées'
      },

      new_title: 'Options d\'adresse',
      edit_title: 'Options d\'adresse',
      address_label: 'Adresse'
    },
    loaddb: {
      progress_message: 'Veuillez patienter durant le chargement de la base de données.',
      progress_title: 'Chargement de la base de données en cours',
      display_alert_title: 'Sélectionner le fichier à télécharger.',
      display_alert_message: 'Veuillez sélectionner le fichier à télécharger.',
      error_display_alert_title: 'Erreur de chargement',
      error_display_alert_message: 'La base de données ne pouvait pas être importée. L\'erreur etait: {{error}}',
      edit_title: 'Importer une BD'
    },
    lookup: {
      delete_value_inventory_type_medication_title: 'Impossible de supprimer le médicament',
      delete_value_inventory_type_medication_message: 'Impossible de supprimer le type d\'inventaire de médicaments car il est requis par le module Médicament.',
      delete_value_lab_pricing_type_procedure_title: 'Impossible de supprimer le type de prix de Labo',
      delete_value_lab_pricing_type_procedure_message: 'Impossible de supprimer le type de prix de procédure de Labo car il est requis par le module Labos.',
      delete_value_imaging_pricing_type_procedure_title: 'Impossible de supprimer le type de prix d\'imagerie',
      delete_value_imaging_pricing_type_procedure_message: 'Impossible de supprimer le type de prix de procédure d\'imagerie car il est requis par le module Imagerie.',
      delete_value_visit_type_admission_title: 'Impossible de supprimer la visite de type Admission',
      delete_value_visit_type_admission_message: 'Impossible de supprimer la visite de type Admission car il est requis par le module Visites.',
      delete_value_visit_type_imaging_title: 'Impossible de supprimer la visite de type Imagerie',
      delete_value_visit_type_imaging_message: 'Impossible de supprimer la visite de type Imagerie car il est requis par le module Imagerie.',
      delete_value_visit_type_lab_title: 'Impossible de supprimer la visite de type Labo',
      delete_value_visit_type_lab_message: 'Impossible de supprimer la visite de type Labo car il est requis par le module Labo.',
      delete_value_visit_type_pharmacy_title: 'Impossible de supprimer la visite de type Pharmacie',
      delete_value_visit_type_pharmacy_message: 'Impossible de supprimer la visite de type Labo car il est requis par le module Médicament.',
      alert_import_list_title: 'Sélectionner le fichier à importer',
      alert_import_list_message: 'Veuillez sélectionner le fichier à importer.',
      alert_import_list_save_title: 'Liste importée',
      alert_import_list_save_message: 'La liste de référence a été importée.',
      alert_import_list_update_title: 'Liste enregistrée',
      alert_import_list_update_message: 'La liste de référence a été enregistrée.',
      page_title: 'Listes de référence',
      edit: {
        template: {
          add_title: 'Ajouter une valeur',
          edit_title: 'Modifier la valeur',
          update_button_text_add: 'Ajouter',
          update_button_text_update: 'Mettre à jour',
          label_title: 'Valeur'
        }
      },
      anesthesia_types: 'Types d\'Anesthésie',
      anesthesiologists: 'Anesthésiologistes',
      billing_categories: 'Catégories de facturation',
      clinic_list: 'Emplacements de la clinique',
      country_list: 'Pays',
      diagnosis_list: 'Diagnostics',
      cpt_code_list: 'Codes CPT',
      expense_account_list: 'Comptes de dépense',
      aisle_location_list: 'Emplacements de rayon d\'inventaire',
      warehouse_list: 'Emplacements d\'inventaire',
      inventory_types: 'Types d\'inventaire',
      imaging_pricing_types: 'Types de prix d\'imagerie',
      lab_pricing_types: 'Types de prix de labo',
      patient_status_list: 'Liste de statut de patient',
      physician_list: 'Médécins',
      procedure_list: 'Procédures',
      procedure_locations: 'Emplacements des procédures',
      procedure_pricing_types: 'Types de prix de procédure',
      radiologists: 'Radiologistes',
      unit_types: 'Types d\'unité',
      vendor_list: 'Fournisseur',
      visit_location_list: 'Emplacements de visite',
      visit_types: 'Types de visite',
      ward_pricing_types: 'Types de prix de service'
    },
    roles: {
      capability: {
        admin: 'Administration',
        load_db: 'Charger la Base de données',
        update_config: 'Mettre à jour les Configurations',
        appointments: 'Rendez-vous',
        add_appointment: 'Ajouter un Rendez-vous',
        billing: 'Facturation',
        add_charge: 'Ajouter une charge',
        add_pricing: 'Ajouter un Prix',
        add_pricing_profile: 'Ajouter le profil de prix',
        add_invoice: 'Ajouter une facture',
        add_payment: 'Ajouter un paiement',
        delete_invoice: 'Supprimer une facture',
        delete_pricing: 'Supprimer un Prix',
        delete_pricing_profile: 'Supprimer le profil de prix',
        edit_invoice: 'Modifier la facture',
        invoices: 'Factures',
        override_invoice: 'Remplacer la facture',
        pricing: 'Tarification',
        patients: 'Patients',
        add_diagnosis: 'Ajouter un diagnostic',
        add_photo: 'Ajouter une photo',
        add_patient: 'Ajouter un patient',
        add_visit: 'Ajouter une visite',
        add_vitals: 'Ajouter les signes vitaux',
        admit_patient: 'Admettre un patient',
        delete_photo: 'Supprimer une photo',
        delete_patient: 'Supprimer un patient',
        delete_appointment: 'Supprimer un rendez-vous',
        delete_diagnosis: 'Supprimer un diagnostic',
        delete_procedure: 'Supprimer une procédure',
        delete_socialwork: 'Supprimer un travail social',
        delete_vitals: 'Supprimer des signes vitaux',
        delete_visit: 'Supprimer une Visite',
        discharge_patient: 'Liberer un patient',
        patient_reports: 'Rapports des patients',
        visits: 'Visites',
        medication: 'Médicament',
        add_medication: 'Ajouter un médicament',
        delete_medication: 'Supprimer un médicament',
        fulfill_medication: 'Traiter une demande de médicaments',
        labs: 'Test Labo',
        add_lab: 'Ajouter un test labo',
        complete_lab: 'Completer un test labo',
        delete_lab: 'Supprimer un test labo',
        imaging: 'Imagerie',
        add_imaging: 'Ajouter une imagerie',
        complete_imaging: 'Completer une imagerie',
        delete_imaging: 'Supprimer une Imagerie',
        inventory: 'Inventaire',
        add_inventory_request: 'Ajouter une demande d\'inventaire',
        add_inventory_item: 'Ajouter un article d\'inventaire',
        add_inventory_purchase: 'Ajouter un achat d\'inventaire',
        adjust_inventory_location: 'Ajuster la localisation de l\'inventaire',
        delete_inventory_item: 'Supprimer un article d\'inventaire',
        delete_inventory_purchase: 'Supprimer un achat d\'inventaire',
        fulfill_inventory: 'Traiter l\'inventaire',
        user_roles: 'Rôles d\'utilisateur'
      },
      messages: {
        role_saved: 'Le rôle {{roleName}}  a été enregistré.'
      },
      titles: {
        role_saved: 'Rôle enregistré'
      }
    }
  },
  labels: {
    cptcode: 'Code CPT',
    loading: 'Chargement',
    name: 'Nom',
    patient: 'Patient',
    prescriber: 'prescripteur',
    quantity: 'Quantité',
    requested_on: 'Demandé le',
    date: 'Date',
    date_of_birth: 'Date de naissance',
    date_of_birth_short: 'DdN',
    date_requested: 'Date de demande',
    date_completed: 'Date de traitement',
    description: 'Description',
    requested_by: 'Demandé par',
    fulfill: 'Traiter',
    fulfill_request: 'Traiter la demande',
    fulfill_request_now: 'Traiter la demande maintenant',
    actions: 'Actions',
    action: 'Action',
    notes: 'Notes',
    edit: 'Modifier',
    image_orders: 'Demandes d\'imagerie',
    lab_orders: 'Demandes de labo',
    patient_history: 'Historique du patient',
    imaging_type: 'Type d\'imagerie',
    result: 'Resultat',
    results: 'Resultats',
    visit: 'Visite',
    requests: 'Demandes',
    completed: 'Traité',
    id: 'Id',
    on: 'sur',
    type: 'Type',
    sex: 'Sexe',
    age: 'Age',
    username: 'Nom d\'utilisateur',
    email: 'Email',
    role: 'Rôle',
    delete: 'Supprimer',
    user_can_add_new_value: 'Utilisateur peut ajouter de nouvelles valeurs',
    value: 'Valeur',
    lookup_type: 'Type de référence',
    import_file: 'Importer un fichier',
    file_load_successful: 'Téléchargement reussi',
    file_to_Load: 'Téléchargement de fichier',
    start_time: 'Heure de debut',
    start_date: 'Date de debut',
    end_time: 'Heure de fin',
    end_date: 'Date de fin',
    doc_read: 'Documents lus',
    doc_written: 'Documents écrits',
    display_name: 'Nom à afficher',
    password: 'Mot de passe',
    edit_user: 'Modifier un utilisateur',
    new_user: 'Nouvel utilisateur',
    delete_user: 'Supprimer un utilisateur',
    medication: 'Médicament',
    status: 'Statut',
    add_new_outpatient_visit: '--Ajouter une nouvelle consultation externe--',
    prescription: 'Ordonnance',
    prescription_date: 'Date de prescription',
    bill_to: 'Facturer à',
    pull_from: 'Tirer de',
    fulfilled: 'Traité',
    delete_request: 'Supprimer la demande',
    location: 'Emplacement',
    provider: 'Fournisseur',
    with: 'Avec',
    all_day: 'Toute la journée',
    physician: 'Médecin',
    assisting: 'Assistant',
    anesthesia: 'Anesthésie',
    procedures: 'Procédures'
  },
  messages: {
    no_items_found: 'Aucun article retrouvé.',
    no_history_available: 'Aucune historique disponible.',
    create_new_record: 'Créer un nouveau dossier?',
    create_new_user: 'Créer un nouvel utilisateur?',
    no_users_found: 'Aucun utilisateur retrouvé.',
    are_you_sure_delete: 'Êtes-vous sûr de vouloir supprimer l\'utilisateur {{user}}?',
    user_has_been_saved: 'L\'utilisateur a été enregistré.',
    user_saved: 'Utilisateur enregistré',
    on_behalf_of: 'de la part de',
    new_patient_has_to_be_created: 'Un nouveau patient doit être crée...Veuillez attendre...',
    no_notes_available: 'Aucune note clinique supplémentaire disponible pour cette visite.',
    sorry: 'Désolé, quelque chose a mal tourné ...',
    for_authorized_persons: 'Ce rapport est destiné uniquement aux personnes autorisées.'
  },
  alerts: {
    please_wait: 'Veuillez attendre'
  },
  buttons: {
    complete: 'Traiter',
    cancel: 'Annuler',
    close: 'Fermer',
    return_button: 'Retourner',
    barcode: 'Code barre',
    add: 'Ajouter',
    update: 'Mettre à jour',
    ok: 'Ok',
    fulfill: 'Traiter',
    remove: 'Retirer',
    delete: 'Supprimer',
    new_user: 'Nouvel utilisateur',
    add_value: 'Ajouter une valeur',
    new_note: 'Nouvelle note',
    import: 'Importer',
    load_file: 'Télécharger le fichier',
    new_request: 'Nouvelle demande',
    all_requests: 'Toutes les demandes',
    dispense: 'Dispenser',
    new_item: '+ nouvel article',
    new_request_plus: '+ nouvelle demande',
    add_visit: 'Ajouter une visite',
    search: 'Rechercher'
  },
  login: {
    messages: {
      sign_in:  'veuillez-vous connecter',
      error:    'Nom d\'utilisateur ou mot de passe est incorrect.'
    },
    labels: {
      password: 'Mot de passe',
      username: 'Nom d\'utilisateur',
      sign_in:  'Connexion'
    }
  },
  inventory: {
    edit: {
      cost: 'Coût par unité:',
      delivered: 'Livré à:',
      location: 'Emplacement ajusté:',
      prescription: 'Ordonnance pour:',
      pulled: 'Tiré de:',
      quantity: 'Quantité après traitement:',
      reason: 'Motif:',
      returned: 'Retourné par le patient:',
      transferred_from: 'Transféré de:',
      transferred_to: 'Transféré à:'
    },
    labels: {
      action: 'Action',
      add: 'Ajouter',
      adjust: 'Ajuster',
      adjustment_date: 'Date d\'ajustement',
      adjustment_for: 'Ajustement pour',
      adjustment_type: 'Type d\'ajustement',
      aisle: 'Rayon',
      aisle_location: 'Emplacement du rayon',
      all_inventory: 'Toute l\'inventaire',
      bill_to: 'Facturer à',
      consume_purchases: 'Utiliser les achats',
      consumption_rate: 'Taux d\'utilisation',
      cost: 'Coût',
      cost_per_unit: 'Coût par unité',
      cross_reference: 'Reference',
      current_quantity: 'Quantité actuelle',
      date_completed: 'Date de traitement',
      date_effective: 'Date d\'effet',
      date_end: 'Date de fin',
      date_start: 'Date de debut',
      date_received: 'Date de réception',
      date_tranferred: 'Date  de transfert',
      days_left: 'Nombre de jours restant',
      delivery_aisle: 'Rayon de livraison',
      delivery_location: 'Emplacement de livraison',
      distribution_unit: 'Unité de distribution',
      delete_item: 'Supprimer l\'article',
      details: 'Détails',
      edit_item: 'Modifier l\'article',
      expense: 'Dépenses pour',
      expiration_date: 'Date d\'expiration',
      fulfill_request: 'Traiter la demande',
      fulfill_request_now: 'Traiter la demande maintenant',
      gift: 'Don en nature',
      gift_usage: 'Utilisation de don en nature',
      gift_in_kind_no: 'N',
      gift_in_kind_yes: 'O',
      inventory_consumed: 'Inventaire utilisé',
      inventory_item: 'Article à inventorier',
      inventory_obsolence: 'Inventory Obsolence',
      invoice_items: 'Articles de facture',
      invoice_line_item: 'Article de facture',
      invoice_number: 'Numero de facture',
      item: 'Article',
      items: 'Articles',
      item_number: 'Numero d\'article',
      location: 'Emplacement',
      locations: 'Emplacements',
      name: 'Nom',
      mark_as_consumed: 'Marqué comme utilisé',
      new_item: 'Nouvel article',
      original_quantity: 'Quantité originale',
      print: 'Imprimer',
      print_barcode: 'Imprimer le code barre',
      printer: 'Imprimante',
      pull_from: 'Tirer de',
      purchases: 'Achats',
      purchase_cost: 'Coût d\'achat',
      purchase_info: 'Détails de l\'achat',
      quantity: 'Quantité ({{unit}})',
      quantity_available: 'Quantité disponible',
      quantity_on_hand: 'Quantité en main',
      quantity_requested: 'Quantité demandée',
      rank: 'Rang',
      reason: 'Motif',
      remove: 'Retirer',
      reorder_point: 'Point de commande',
      requested_items: 'Articles demandés',
      sale_price_per_unit: 'Prix de vente unitaire',
      save: 'Enregistrer',
      serial_number: 'Numéro de série / lot',
      total: 'Total',
      total_cost: 'Coût total',
      total_received: 'Total reçu: {{total}}',
      transaction: 'Transaction',
      transactions: 'Transactions',
      transfer: 'Transférer',
      transfer_from: 'Transféré de',
      transfer_to: 'Transférer à l\'emplacement',
      transfer_to_aisle: 'Transférer à l\'emplacement du rayon',
      unit: 'Unité',
      unit_cost: 'Coût unitaire',
      vendor: 'Fournisseur',
      vendor_item_number: 'Numéro d\'article fournisseur',
      xref: 'XRef'
    },
    messages: {
      adjust: 'Veuillez ajuster les quantités sur le ou les emplacement(s) appropriée(s) pour tenir compte de la différence de {{difference}}.',
      create_request: 'Créer une nouvelle demande?',
      delete: 'Etes-vous sûr que vous souhaitez supprimer {{name}}?',
      item_not_found: 'L\'article d\'inventaire <strong>{{item}}</strong> ne pouvait pas être retrouvé.<br>Si vous voulez créer un nouvel article d\'inventaire, veuillez saisir les informations ci-dessous. <br>Sinon, appuyez sur le bouton Annuler pour retourner.',
      loading: 'Chargement des transactions en cours…',
      purchase_saved: 'Les achats d\'inventaire ont été enregistrés avec succès.',
      no_requests: 'Aucune demande retrouvée.',
      no_items: 'Aucun article retrouvé.',
      quantity: 'La quantité totale de <strong>({{quantity}})</strong> ne correspond pas à la quantité totale dans les emplacements <strong>({{locationQuantity}})</strong>.',
      remove_item: 'Etes-vous sûr de vouloir retirer cet article de cette facture?',
      remove_item_request: 'Etes-vous sûr de vouloir supprimer cet article de cette demande?',
      request_fulfilled: 'La demande d\'inventaire a été traitée.',
      request_updated: 'La demande d\'inventaire a été mis à jour.',
      warning: 'Veuillez remplir les champs obligatoires (marqués d\'un *) et corriger les erreurs avant d\'ajouter.'
    },
    reports: {
      rows: {
        adjustments: 'Ajustements',
        adjustments_total: 'Ajustements totaux',
        balance_begin: 'Solde d\'ouverture',
        balance_end: 'Solde de clôture',
        category: 'Catégorie',
        consumed: 'Utilisé',
        consumed_gik: 'GiK utilisé',
        consumed_gik_total: 'GiK total utilisé',
        consumed_puchases: 'Achats utilisés',
        consumed_purchases_total: 'Achats totaux utilisés',
        consumed_total: 'Total utilisé',
        err_in_fin_sum: 'Erreur dans _generateFinancialSummaryReport: ',
        err_in_find_pur: 'Erreur dans _findInventoryItemsByPurchase: ',
        err_in_find_req: 'Erreur dans _findInventoryItemsByRequest: ',
        expenses_for: 'Dépenses pour: ',
        no_account: '(Pas de compte)',
        subtotal: 'Sous-total: ',
        subtotal_for: 'Sous-total pour {{category}} - {{account}}: ',
        total: 'Total: ',
        total_for: 'Total pour {{var}}: ',
        total_purchases: 'Achats totaux',
        transfer1: '{{quantity}} de {{location}}',
        trasnfer2: 'De: {{source}} A: {{target}}'
      },
      adjustment: 'Ajustement détaillée',
      days_supply: 'Stock restant (en nombre de jours)',
      expense_detail: 'Détails des dépenses',
      expense_sum: 'Résumé des dépenses',
      expiration: 'Date d\'expiration',
      export: 'Exporter un rapport',
      fields: 'Champs à inclure',
      finance: 'Résumé des finances',
      generate: 'Créer un rapport',
      inv_location: 'Inventaire par emplacement',
      inv_valuation: 'Valorisation de l\'inventaire',
      purchase_detail: 'Détails de l\'achat',
      purchase_sum: 'Résumé de l\'achat',
      report_type: 'Type de rapport',
      stock_transfer_detail: 'Transfert détaillé du stock',
      stock_transfer_sum: 'Résumé du transfert du stock',
      stock_usage_detail: 'Utilisation détaillée du stock',
      stock_usage_sum: 'Résumé de l\'utilisation du stock'
    },
    titles: {
      add_purchase: 'Ajouter un achat',
      add_request: 'Nouvelle demande',
      adjustment: 'Ajustement',
      edit_purchase: 'Modifier l\'achat',
      edit_request: 'Modifier la demande',
      inventory_item: 'Nouvel article d\'inventaire',
      inventory_report: 'Rapport d\'inventaire',
      purchase_saved: 'Achats d\'inventaire enregistrés',
      quick_add_title: 'Nouvel article d\'inventaire',
      remove_item: 'Retirer l\'article',
      request_fulfilled: 'Demande traitée',
      request_updated: 'Demande mis à jour',
      transfer: 'Transférer les articles',
      warning: 'Attention!!!!!'
    }
  },
  imaging: {
    page_title: 'Demandes d\'imagerie',
    section_title: 'Imagerie',
    buttons: {
      new_button: '+ nouvelle imagerie'
    },
    labels: {
      radiologist: 'Radiologiste',
      add_new_visit: '--Ajouter une nouvelle visite--'
    },
    messages: {
      no_completed: 'Aucun article traité retrouvé.'
    },
    titles: {
      completed_imaging: 'Imagerie traitée',
      edit_title: 'Modifier la demande d\'imagerie',
      new_title: 'Nouvelle demande d\'imagerie'
    },
    alerts: {
      completed_title: 'Demande d\'imagerie traitée' ,
      completed_message: 'La demande d\'imagerie a été traitée.',
      saved_title: 'Demande d\'imagerie enregistrée',
      saved_message: 'La demande d\'imagerie a été enregistrée.'
    }
  },
  medication: {
    page_title: 'Demandes de médicament',
    section_title: 'Médicament',
    return_medication: 'Retourner un médicament',
    buttons: {
      dispense_medication: 'dispenser un médicament',
      new_button: '+ nouvelle demande',
      return_medication: 'retourner un médicament'
    },
    titles: {
      completed_medication: 'Médicament traitée',
      edit_medication_request: 'Modifier une demande de médicament',
      new_medication_request: 'Nouvelle demande de médicament'
    },
    messages: {
      create_new: 'Créer une nouvelle demande de médicament?',
      confirm_deletion: 'Êtes-vous sûr de vouloir supprimer cette demande de médicaments?'
    },
    labels: {
      refills: 'Renouvellements',
      quantity_requested: 'Quantité demandé',
      quantity_dispensed: 'Quantité dispensé',
      quantity_distributed: 'Quantité distribué',
      quantity_to_return: 'Quantité à retourner',
      return_location: 'Emplacement de retour',
      return_aisle: 'Rayon de retour',
      return_reason: 'Motif/notes du retour',
      adjustment_date: 'Date d\'ajustement',
      credit_to_account: 'Créditer le compte'
    },
    alerts: {
      returned_title: 'Médicament retourné',
      returned_message:  'Le médicament a été marqué comme retourné.',
      saved_title: 'Demande de médicament enregistrée',
      saved_message: 'Le dossier de médicament a été enregistré.',
      fulfilled_title: 'Demande de médicament traitée'
    }
  },
  appointments: {
    current_screen_title: 'Liste des rendez-vous',
    edit_title: 'Modifier le rendez-vous',
    new_title: 'Nouveau rendez-vous',
    section_title: 'Rendez-vous',
    this_week: 'Rendez-vous de la semaine',
    missed: 'Rendez-vous manqués',
    search_title: 'Rechercher les rendez-vous',
    today_title: 'Rendez-vous d\'aujourd\'hui',
    messages: {
      delete_appointment_message: 'Etes-vous sûr de vouloir supprimer ce rendez-vous?',
      end_time_later_than_start: 'Veuillez sélectionnez une heure de fin plus tard que l\'heure de début.'
    },
    buttons: {
      new_button: '+ nouveau rendez-vous'
    }
  },
  visits: {
    edit: {
      buttons: {
        new_appointment: 'Nouveau rendez-vous',
        add_diagnosis: 'Ajoute un diagnostic',
        new_procedure: 'Nouvelle procédure',
        new_lab: 'Nouveau labo',
        new_imaging: 'Nouvelle imagerie',
        new_medication: 'Nouveau médicament'
      },
      labels: {
        diagnosis: 'Diagnostic',
        procedure: 'Procédure',
        authored_by: 'Crée par',
        labs: 'Labos',
        imaging: 'Imagerie',
        visit_information: 'Détails de la visite'
      }
    }
  },
  labs: {
    section_title: 'Labos',
    requests_title: 'Demandes de labo',
    edit_title: 'Modifier la demande de labo',
    new_title: 'Nouvelle demande de labo',
    delete_title: 'Supprimer la demande',
    completed_title: 'Labos traités',
    labels: {
      lab_type: 'Type de labo',
      add_new_visit: '--Ajouter une nouvelle visite--'
    },
    messages: {
      no_items_found: 'Aucun labo retrouvé.',
      create_new_record: 'Créer un nouveau dossier?',
      confirm_deletion: 'Etes-vous sûr de vouloir supprimer cette demande de labo?',
      no_completed: 'Aucun article traité retrouvé.'
    },
    buttons: {
      new_button: '+ nouveau labo'
    },
    alerts: {
      request_completed_title: 'Demande de labo traitée',
      request_completed_message: 'La demande de labo a été traitée.',
      request_saved_title: 'Demande de labo enregistrée',
      request_saved_message: 'La demande de labo a été enregistrée.'
    }
  },
  common: {
    actions: 'Actions'
  },
  patients: {
    notes: {
      on_behalf_of_label: 'De la part de',
      on_behalf_of_copy: 'de la part de',
      please_select_a_visit: 'Veuillez sélectionner une visite',
      note_label: 'Note'
    }
  }
};
